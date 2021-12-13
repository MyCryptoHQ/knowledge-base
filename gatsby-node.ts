import { promises as fs } from 'fs';
import { join, resolve } from 'path';
import {
  CreatePageArgs,
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
import { POPULAR_ARTICLES } from './src/config';
import { Breadcrumb, MdxNode, YamlNode } from './src/types';

const REDIRECTS_FILE = resolve(__dirname, './content/redirects.yml');

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
        extendedDescription: Mdx
        slug: String!
        category: Yaml
        parentCategory: Yaml
        pages: [Mdx]
        popularArticles: [Mdx]
        totalArticles: Int!
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

        extendedDescription: {
          async resolve(node: Node, _, { nodeModel }): Promise<Node | undefined> {
            const { relativeDirectory } = nodeModel.getNodeById<FileNode>({ id: node.parent! });

            return nodeModel.findOne<MdxNode>({
              type: 'Mdx',
              query: {
                filter: {
                  slug: {
                    eq: `${relativeDirectory}/description`
                  }
                }
              }
            });
          }
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
        },

        popularArticles: {
          async resolve(node: Node, _, { nodeModel }): Promise<GatsbyIterable<Node>> {
            if (!node.popular_articles) {
              return new GatsbyIterable([]);
            }

            const slug = getCategorySlug(node, nodeModel);
            const slugs = (node.popular_articles as string[]).map((page) => `${slug}/${page}`);

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

        totalArticles: {
          async resolve(node: Node, _, { nodeModel }): Promise<number> {
            const slug = getCategorySlug(node, nodeModel);

            const { totalCount } = await nodeModel.findAll({
              type: 'Mdx',
              query: {
                filter: {
                  slug: {
                    glob: `${slug}/**`
                  }
                }
              }
            });

            return totalCount();
          }
        }
      }
    };

    createResolvers(resolvers);
  },

  async createPages({ actions: { createRedirect } }: CreatePagesArgs): Promise<void> {
    const { redirects } = parse(await fs.readFile(REDIRECTS_FILE, 'utf-8'));

    redirects.forEach((redirect: { from: string; to: string }) => {
      createRedirect({
        fromPath: `/${redirect.from}`,
        toPath: `/${redirect.to}`,
        isPermanent: true
      });
    });
  },

  async onCreatePage({
    page,
    actions: { deletePage, createPage }
  }: CreatePageArgs<Record<string, unknown>>): Promise<void> {
    deletePage(page);

    const slug = page.context.slug as string | undefined;

    // Skip description files
    if (slug?.startsWith('troubleshooter') && slug?.endsWith('description')) {
      return;
    }

    // Override component for troubleshooter pages
    if (slug?.startsWith('troubleshooter')) {
      return createPage({
        ...page,
        component: require.resolve('./src/components/Troubleshooter.tsx'),
        context: {
          ...page.context,
          popularArticles: POPULAR_ARTICLES,
          glob: `${page.context.slug}/**`
        }
      });
    }

    createPage({
      ...page,
      context: {
        ...page.context,
        popularArticles: POPULAR_ARTICLES,
        glob: `${page.context.slug}/**`
      }
    });
  }
};

export default gatsbyNode;
