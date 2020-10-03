import { promises as fs } from 'fs';
import { join, resolve } from 'path';
import {
  CreatePagesArgs,
  CreateResolversArgs,
  CreateSchemaCustomizationArgs,
  GatsbyNode,
  Node,
  Resolvers,
  NodeModel
} from 'gatsby';
import { titleCase } from 'title-case';
import { parse } from 'yaml';
import { POPULAR_ARTICLES } from '../src/config/articles';
import { Breadcrumb } from '../src/types/breadcrumb';
import { YamlNode } from '../src/types/category';
import { MdxNode } from '../src/types/page';

const REDIRECTS_FILE = resolve(__dirname, '../content/redirects.yml');

const HOME_TEMPLATE = resolve(__dirname, '../src/templates/index.tsx');
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
      type Breadcrumb {
        title: String!
        slug: String!
      }

      type Mdx implements Node {
        categoryId: ID!
        category: Yaml!
        slug: String!
        frontmatter: MdxFrontmatter!
        breadcrumbs: [Breadcrumb]!
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
        pages: [Mdx]
        categories: [Yaml]
        breadcrumbs: [Breadcrumb]!
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
   */
  async createResolvers({ createResolvers, reporter }: CreateResolversArgs): Promise<void> {
    const getPageSlug = (node: Node, nodeModel: NodeModel): string => {
      const { relativePath } = nodeModel.getNodeById<FileNode>({ id: node.parent });
      return relativePath.replace(/\.md$/, '');
    };

    const getCategorySlug = (node: Node, nodeModel: NodeModel): string => {
      const parent = nodeModel.getNodeById<FileNode>({ id: node.parent });
      return parent.relativePath.replace(/\/category\.yml$/, '');
    };

    const getBreadcrumbs = (breadcrumbs: Breadcrumb[], nodes: YamlNode[], nodeModel: NodeModel): Breadcrumb[] => {
      const parentSlug = join(breadcrumbs[0].slug, '..');
      if (parentSlug === '.') {
        return breadcrumbs;
      }

      const parent = nodes.find(node => getCategorySlug(node, nodeModel) === parentSlug);
      if (parent) {
        const newBreadcrumbs = [
          {
            title: titleCase(parent.title),
            slug: getCategorySlug(parent, nodeModel)
          },
          ...breadcrumbs
        ];

        return getBreadcrumbs(newBreadcrumbs, nodes, nodeModel);
      }

      return breadcrumbs;
    };

    const resolvers: Resolvers = {
      Mdx: {
        slug: {
          resolve: (node: Node, _, { nodeModel }) => getPageSlug(node, nodeModel)
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
            const { relativeDirectory } = nodeModel.getNodeById<FileNode>({ id: node.parent });

            const nodes = nodeModel.getAllNodes<YamlNode>({ type: 'Yaml' });
            return nodes.find(categoryNode => {
              const parent = nodeModel.getNodeById<FileNode>({ id: categoryNode.parent });
              return parent.relativeDirectory === relativeDirectory;
            })!;
          }
        },

        breadcrumbs: {
          resolve(node: Node, _, { nodeModel }): Breadcrumb[] {
            const nodes = nodeModel.getAllNodes<YamlNode>({ type: 'Yaml' });
            return getBreadcrumbs(
              [
                {
                  title: (node as MdxNode).frontmatter.title as string,
                  slug: getPageSlug(node, nodeModel)
                }
              ],
              nodes,
              nodeModel
            );
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
          resolve: (node: Node, _, { nodeModel }) => getCategorySlug(node, nodeModel)
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
            const slug = getCategorySlug(node, nodeModel);
            const nodes = nodeModel.getAllNodes<YamlNode>({ type: 'Yaml' });

            if (!node.categories) {
              return;
            }

            return (node.categories as string[])
              .map(category => `${slug}/${category}`)
              .map(categorySlug => {
                const category = nodes.find(categoryNode => categorySlug === getCategorySlug(categoryNode, nodeModel));
                if (!category) {
                  reporter.panic(`Category ${categorySlug} specified, but not found`);
                }

                return category!;
              });
          }
        },

        pages: {
          resolve(node: Node, _, { nodeModel }): Node[] | undefined {
            const slug = getCategorySlug(node, nodeModel);
            const nodes = nodeModel.getAllNodes<YamlNode>({ type: 'Mdx' });

            if (!node.articles) {
              return;
            }

            return (node.articles as string[])
              .map(page => `${slug}/${page}`)
              .map(pageNode => {
                const page = nodes.find(categoryNode => pageNode === getPageSlug(categoryNode, nodeModel));
                if (!page) {
                  reporter.panic(`Page ${pageNode} specified, but not found`);
                }

                return page!;
              });
          }
        },

        breadcrumbs: {
          resolve(node: Node, _, { nodeModel }): Breadcrumb[] {
            const nodes = nodeModel.getAllNodes<YamlNode>({ type: 'Yaml' });
            return getBreadcrumbs(
              [
                {
                  title: (node as YamlNode).title as string,
                  slug: getCategorySlug(node, nodeModel)
                }
              ],
              nodes,
              nodeModel
            );
          }
        }
      }
    };

    createResolvers(resolvers);
  },

  async createPages({ actions: { createPage, createRedirect }, graphql, reporter }: CreatePagesArgs): Promise<void> {
    createPage({
      path: '/',
      component: HOME_TEMPLATE,
      context: {
        popularArticles: POPULAR_ARTICLES
      }
    });

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
            slug,
            popularArticles: POPULAR_ARTICLES
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
