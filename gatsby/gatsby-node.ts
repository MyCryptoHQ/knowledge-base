import { promises as fs } from 'fs';
import { join, resolve } from 'path';
import {
  CreatePagesArgs,
  CreateResolversArgs,
  CreateSchemaCustomizationArgs,
  GatsbyNode,
  Node,
  Resolvers
} from 'gatsby';
import { titleCase } from 'title-case';
import { parse } from 'yaml';
import { YamlNode } from '../src/types/category';

const REDIRECTS_FILE = resolve(__dirname, '../content/redirects.yml');

const CATEGORY_TEMPLATE = resolve(__dirname, '../src/templates/category.tsx');
const PAGE_TEMPLATE = resolve(__dirname, '../src/templates/page.tsx');
const TAG_TEMPLATE = resolve(__dirname, '../src/templates/tag.tsx');

type FileNode = Node & {
  relativePath: string;
  relativeDirectory: string;
};

const gatsbyNode: GatsbyNode = {
  /**
   * Customizes the GraphQL schema with knowledge base-specific fields.
   */
  async createSchemaCustomization({ actions }: CreateSchemaCustomizationArgs): Promise<void> {
    const { createTypes, createFieldExtension } = actions;

    const typeDefs = `
      type Mdx implements Node {
        categoryId: ID!
        category: Yaml!
        slug: String!
        frontmatter: MdxFrontmatter!
      }

      type MdxFrontmatter {
        title: String! @titleCase
        tags: [String]
        datePublished: Date
        dateModified: Date
      }

      type Yaml implements Node {
        categoryId: ID
        title: String! @titleCase
        slug: String!
        category: Yaml @link(by: "id", from: "categoryId")
        pages: [Mdx] @link(by: "categoryId", from: "id")
        categories: [Yaml]
      }
    `;

    createTypes(typeDefs);

    createFieldExtension({
      name: 'titleCase',
      extend: () => ({
        resolve(source: Node, _: null, __: null, info: { fieldName: string }) {
          return titleCase(source[info.fieldName] as string);
        }
      })
    });
  },

  /**
   * Adds resolvers for the added GraphQL fields.
   *
   * ```
   * Mdx
   *  - categoryId
   *  - slug
   *  - frontmatter
   *     - datePublished
   *     - dateModified
   * ```
   */
  async createResolvers({ createResolvers }: CreateResolversArgs): Promise<void> {
    const resolvers: Resolvers = {
      Mdx: {
        slug: {
          resolve(node: Node, _, { nodeModel }): string {
            const { relativePath } = nodeModel.getNodeById<FileNode>({ id: node.parent });
            return relativePath.replace(/\.md$/, '');
          }
        },

        categoryId: {
          resolve(node: Node, _, { nodeModel }): string {
            const { relativeDirectory } = nodeModel.getNodeById<FileNode>({ id: node.parent });

            const nodes = nodeModel.getAllNodes<YamlNode>({ type: 'Yaml' });
            const category = nodes.find(categoryNode => {
              const parent = nodeModel.getNodeById<FileNode>({ id: categoryNode.parent });
              return parent.relativeDirectory === relativeDirectory;
            })!;

            return category.id;
          }
        },

        category: {
          resolve(node: Node, _, { nodeModel }): Node {
            const { relativePath } = nodeModel.getNodeById<FileNode>({ id: node.parent });
            const parentSlug = relativePath.match(/(.*)\//)![1];

            const nodes = nodeModel.getAllNodes<YamlNode>({ type: 'Yaml' });
            return nodes.find(categoryNode => {
              const parent = nodeModel.getNodeById<FileNode>({ id: categoryNode.parent });
              return parent.relativePath === `${parentSlug}/category.yml`;
            })!;
          }
        }
      },

      MdxFrontmatter: {
        datePublished: {
          resolve(node: Node): string {
            return node.date_published as string;
          }
        },

        dateModified: {
          resolve(node: Node): string {
            return node.date_modified as string;
          }
        }
      },

      Yaml: {
        slug: {
          resolve(node: Node, _, { nodeModel }): string {
            const parent = nodeModel.getNodeById<FileNode>({ id: node.parent });
            return parent.relativePath.replace(/\/category\.yml$/, '');
          }
        },

        categoryId: {
          resolve(node: Node, _, { nodeModel }): string | undefined {
            const { relativeDirectory } = nodeModel.getNodeById<FileNode>({ id: node.parent });
            const parentDirectory = join(relativeDirectory, '..');

            if (parentDirectory === '.') {
              return;
            }

            const nodes = nodeModel.getAllNodes<YamlNode>({ type: 'Yaml' });
            const category = nodes.find(categoryNode => {
              const parent = nodeModel.getNodeById<FileNode>({ id: categoryNode.parent });
              return parent.relativeDirectory === parentDirectory;
            });

            return category?.id;
          }
        },

        category: {
          resolve(node: Node, _, { nodeModel }): Node | undefined {
            const { relativeDirectory } = nodeModel.getNodeById<FileNode>({ id: node.parent });
            const parentDirectory = join(relativeDirectory, '..');

            if (parentDirectory === '.') {
              return;
            }

            const nodes = nodeModel.getAllNodes<YamlNode>({ type: 'Yaml' });
            return nodes.find(categoryNode => {
              const parent = nodeModel.getNodeById<FileNode>({ id: categoryNode.parent });
              return parent.relativeDirectory === parentDirectory;
            });
          }
        },

        categories: {
          resolve(node: Node, _, { nodeModel }): Node[] | undefined {
            const { relativeDirectory } = nodeModel.getNodeById<FileNode>({ id: node.parent });

            const nodes = nodeModel.getAllNodes<YamlNode>({ type: 'Yaml' });
            return nodes.filter(categoryNode => {
              const parent = nodeModel.getNodeById<FileNode>({ id: categoryNode.parent });
              const directory = join(parent.relativeDirectory, '..');

              return relativeDirectory === directory;
            });
          }
        }
      }
    };

    createResolvers(resolvers);
  },

  async createPages({ actions: { createPage, createRedirect }, graphql, reporter }: CreatePagesArgs): Promise<void> {
    type QueryData<T extends string> = {
      [key in T]: {
        nodes: Array<{
          slug: string;
        }>;
      };
    };

    /**
     * Simple helper function to create pages from a GraphQL query. This assumes the node has a slug,
     * which is used as `path` and `context`.
     *
     * @param {string} fieldName The GraphQL field name of the data
     * @param {string} component Path to the React component to use for the page
     * @returns {Promise<void>}
     */
    const createPagesFromNode = async (fieldName: 'allMdx' | 'allYaml', component: string) => {
      const result = await graphql<QueryData<typeof fieldName>>(`
      query {
        ${fieldName} {
          nodes {
            slug
          }
        }
      }
    `);

      if (!result.data || result.errors) {
        reporter.panicOnBuild('Failed to fetch all content', result.errors);
        return process.exit(1);
      }

      const { nodes } = result.data[fieldName];
      nodes.forEach(({ slug }) => {
        createPage({
          path: slug,
          component,
          context: {
            slug
          }
        });
      });
    };

    interface TagsQueryData {
      allMdx: {
        nodes: Array<{
          frontmatter: {
            tags: string[];
          };
        }>;
      };
    }

    const encodeTag = (tag: string): string => {
      return tag.toLowerCase().replace(/\s/g, '-');
    };

    const createTags = async () => {
      const result = await graphql<TagsQueryData>(`
        query {
          allMdx {
            nodes {
              frontmatter {
                tags
              }
            }
          }
        }
      `);

      if (!result.data || result.errors) {
        reporter.panicOnBuild('Failed to fetch tags', result.errors);
        return process.exit(1);
      }

      const tags = new Set(result.data.allMdx.nodes.flatMap(page => page.frontmatter.tags));

      tags.forEach(tag => {
        createPage({
          path: `/tag/${encodeTag(tag)}`,
          component: TAG_TEMPLATE,
          context: {
            tag: [tag],
            tagName: tag
          }
        });
      });
    };

    /**
     * Reads `redirects.yml` from the content repository and registers all redirects.
     *
     * @returns {Promise<void>}
     */
    const createRedirects = async () => {
      const { redirects } = parse(await fs.readFile(REDIRECTS_FILE, 'utf-8'));

      redirects.forEach((redirect: { from: string; to: string }) => {
        createRedirect({
          fromPath: `/${redirect.from}`,
          toPath: `/${redirect.to}`,
          isPermanent: true
        });
      });
    };

    await createPagesFromNode('allMdx', PAGE_TEMPLATE);
    await createPagesFromNode('allYaml', CATEGORY_TEMPLATE);
    await createTags();
    await createRedirects();
  }
};

export default gatsbyNode;
