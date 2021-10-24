import { promises as fs } from 'fs';
import { join, resolve } from 'path';
import {
  CreatePagesArgs,
  CreateResolversArgs,
  CreateSchemaCustomizationArgs,
  GatsbyNode,
  Node,
  NodeModel,
  Resolvers
} from 'gatsby';
import { GatsbyIterable } from 'gatsby/dist/datastore/common/iterable';
import { titleCase } from 'title-case';
import { parse } from 'yaml';
import { POPULAR_ARTICLES } from './src/config/articles';
import { Breadcrumb, YamlNode, MdxNode } from './src/types';
import { encodeTag } from './src/utils';

const REDIRECTS_FILE = resolve(__dirname, './content/redirects.yml');

const HOME_TEMPLATE = resolve(__dirname, './src/templates/index.tsx');
const CATEGORY_TEMPLATE = resolve(__dirname, './src/templates/category.tsx');
const PAGE_TEMPLATE = resolve(__dirname, './src/templates/page.tsx');
const TAG_TEMPLATE = resolve(__dirname, './src/templates/tag.tsx');

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
        category: Yaml!
        slug: String!
        frontmatter: MdxFrontmatter!
        breadcrumbs: [Breadcrumb]!
        relatedArticles: [Mdx]
      }

      type MdxFrontmatter {
        title: String! @titleCase
      }

      type Yaml implements Node {
        title: String! @titleCase
        slug: String!
        category: Yaml
        parentCategory: Yaml
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
  async createResolvers({ createResolvers }: CreateResolversArgs): Promise<void> {
    const getPageSlug = (node: Node, nodeModel: NodeModel): string => {
      const { relativePath } = nodeModel.getNodeById<FileNode>({ id: node.parent! });
      return relativePath.replace(/\.md$/, '');
    };

    const getCategorySlug = (node: Node, nodeModel: NodeModel): string => {
      const parent = nodeModel.getNodeById<FileNode>({ id: node.parent! });
      return parent.relativePath.replace(/\/category\.yml$/, '');
    };

    const getBreadcrumbs = async (breadcrumbs: Breadcrumb[], nodeModel: NodeModel): Promise<Breadcrumb[]> => {
      const parentSlug = join(breadcrumbs[0].slug, '..');
      if (parentSlug === '.') {
        return breadcrumbs;
      }

      const parent = await nodeModel.findOne<YamlNode>({
        type: 'Yaml',
        query: {
          filter: {
            slug: {
              eq: parentSlug
            }
          }
        }
      });

      if (parent) {
        const newBreadcrumbs = [
          {
            title: titleCase(parent.title),
            slug: getCategorySlug(parent, nodeModel)
          },
          ...breadcrumbs
        ];

        return getBreadcrumbs(newBreadcrumbs, nodeModel);
      }

      return breadcrumbs;
    };

    const resolvers: Resolvers = {
      Mdx: {
        slug: {
          resolve: (node: Node, _, { nodeModel }) => getPageSlug(node, nodeModel)
        },

        category: {
          async resolve(node: Node, _, { nodeModel }): Promise<Node | undefined> {
            const { relativeDirectory } = nodeModel.getNodeById<FileNode>({ id: node.parent! });

            return nodeModel.findOne({
              type: 'Yaml',
              query: {
                filter: {
                  slug: {
                    eq: relativeDirectory
                  }
                }
              }
            });
          }
        },

        breadcrumbs: {
          async resolve(node: Node, _, { nodeModel }): Promise<Breadcrumb[]> {
            return getBreadcrumbs(
              [
                {
                  title: (node as MdxNode).frontmatter.title as string,
                  slug: getPageSlug(node, nodeModel)
                }
              ],
              nodeModel
            );
          }
        },

        relatedArticles: {
          async resolve(node: Node, _, { nodeModel }): Promise<GatsbyIterable<Node> | undefined> {
            const mdxNode = node as MdxNode;

            if (mdxNode.frontmatter.related_articles) {
              const { entries } = await nodeModel.findAll<MdxNode>({
                type: 'Mdx',
                query: {
                  filter: {
                    slug: {
                      in: mdxNode.frontmatter.related_articles
                    }
                  }
                }
              });

              return entries;
            }
          }
        }
      },

      Yaml: {
        slug: {
          resolve: (node: Node, _, { nodeModel }) => getCategorySlug(node, nodeModel)
        },

        /**
         * Top level category.
         */
        parentCategory: {
          async resolve(node: Node, _, { nodeModel }): Promise<Node | undefined> {
            const slug = getCategorySlug(node, nodeModel);
            const parentSlug = slug.split('/')[0];

            if (slug === parentSlug) {
              return node;
            }

            return nodeModel.findOne({
              type: 'Yaml',
              query: {
                filter: {
                  slug: {
                    eq: parentSlug
                  }
                }
              }
            });
          }
        },

        /**
         * Direct parent category.
         */
        category: {
          async resolve(node: Node, _, { nodeModel }): Promise<Node | undefined> {
            const { relativeDirectory } = nodeModel.getNodeById<FileNode>({ id: node.parent! });
            const parentDirectory = join(relativeDirectory, '..');

            if (parentDirectory === '.') {
              return;
            }

            return nodeModel.findOne({
              type: 'Yaml',
              query: {
                filter: {
                  slug: {
                    eq: parentDirectory
                  }
                }
              }
            });
          }
        },

        /**
         * Child categories.
         */
        categories: {
          async resolve(node: Node, _, { nodeModel }): Promise<GatsbyIterable<Node> | undefined> {
            if (!node.categories) {
              return;
            }

            const slug = getCategorySlug(node, nodeModel);
            const slugs = (node.categories as string[]).map((category) => `${slug}/${category}`);

            const { entries } = await nodeModel.findAll({
              type: 'Yaml',
              query: {
                filter: {
                  slug: {
                    in: slugs
                  }
                }
              }
            });

            return entries;
          }
        },

        /**
         * Child pages.
         */
        pages: {
          async resolve(node: Node, _, { nodeModel }): Promise<GatsbyIterable<Node> | undefined> {
            if (!node.articles) {
              return;
            }

            const slug = getCategorySlug(node, nodeModel);
            const slugs = (node.articles as string[]).map((page) => `${slug}/${page}`);

            const { entries } = await nodeModel.findAll({
              type: 'Mdx',
              query: {
                filter: {
                  slug: {
                    in: slugs
                  }
                }
              }
            });

            return entries;
          }
        },

        breadcrumbs: {
          async resolve(node: Node, _, { nodeModel }): Promise<Breadcrumb[]> {
            return getBreadcrumbs(
              [
                {
                  title: (node as YamlNode).title as string,
                  slug: getCategorySlug(node, nodeModel)
                }
              ],
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

      const tags = new Set(result.data.allMdx.nodes.flatMap((page) => page.frontmatter.tags));

      tags.forEach((tag) => {
        if (!tag) {
          return;
        }

        createPage({
          path: `/tag/${encodeTag(tag)}`,
          component: TAG_TEMPLATE,
          context: {
            tag: [tag],
            tagName: tag,
            popularArticles: POPULAR_ARTICLES
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
