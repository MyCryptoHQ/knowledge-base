import { CreatePagesArgs, GatsbyNode, Node, SourceNodesArgs } from 'gatsby';
import minimatch from 'minimatch';
import { resolve } from 'path';

const CATEGORY_TEMPLATE = resolve(__dirname, '../src/templates/category.tsx');
const PAGE_TEMPLATE = resolve(__dirname, '../src/templates/page.tsx');
const TAG_TEMPLATE = resolve(__dirname, '../src/templates/tag.tsx');

type PageNode = Node & {
  frontmatter: {
    title: string;
    description: string;
    tags: string[];
    priority: string;
    date_published: string;
    date_modified: string;
  };
};

type FileNode = Node & {
  relativePath: string;
};

/**
 * Creates nodes for all categories and pages.
 */
export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions: { createNode, createParentChildLink },
  createNodeId,
  createContentDigest,
  getNode,
  getNodes,
  reporter
}: SourceNodesArgs): Promise<void> => {
  const nodes: Node[] = getNodes();
  const pageNodes: PageNode[] = nodes.filter(node => node.internal.type === 'Mdx') as PageNode[];
  const categoryNodes = nodes
    .filter(node => node.internal.type === 'Yaml')
    .filter(node => node.relativePath !== 'redirects.yml');

  /**
   * Get a slug from a page data node.
   *
   * @param node {Node} The page data node to get the slug for.
   * @return {string} The slug for the page.
   */
  const getPageSlug = (node: Node) => {
    const parent = getNode(node.parent) as FileNode;
    return parent.relativePath.replace(/\.md$/, '');
  };

  /**
   * Register all pages for `categoryNode`.
   *
   * @param categoryNode The category to register the pages for.
   * @return {number} The number of pages registered for the category.
   */
  const getPages = async (categoryNode: Node) => {
    const pageDataNodes = pageNodes.filter(node => {
      const parent = getNode(node.parent) as FileNode;
      return minimatch(parent.relativePath, `${categoryNode.slug}/*`);
    });

    for (const dataNode of pageDataNodes) {
      const slug = getPageSlug(dataNode);
      const {
        frontmatter: { title, description, tags, priority, date_published: datePublished, date_modified: dateModified }
      } = dataNode;

      const nodeData = {
        title,
        description,
        tags: tags ?? [],
        priority,
        datePublished,
        dateModified,
        slug
      };

      const node: Node = {
        ...nodeData,
        id: createNodeId(`page-${slug}`),
        parent: categoryNode.id,
        children: [],
        internal: {
          type: 'Page',
          contentDigest: createContentDigest(nodeData),
          owner: ''
        }
      };

      await createNode(node);
      createParentChildLink({ parent: categoryNode, child: node });
      createParentChildLink({ parent: node, child: dataNode });
    }

    return pageDataNodes.length;
  };

  /**
   * Get a slug from a category data node.
   *
   * @param {Node} node The category data node to get the slug for.
   * @return {string} The slug for the category.
   */
  const getCategorySlug = (node: Node) => {
    const parent = getNode(node.parent) as FileNode;
    return parent.relativePath.replace('/category.yml', '');
  };

  /**
   * Register all categories for `pattern`.
   *
   * @param {Node | null} parent The parent of the category nodes.
   * @param {string} pattern The glob pattern to get all category file nodes for.
   */
  const getCategories = async (parent: Node | null, pattern: string) => {
    const categoryDataNodes = categoryNodes.filter(node => {
      const parentNode = getNode(node.parent) as FileNode;
      return minimatch(parentNode.relativePath, pattern);
    });

    for (const dataNode of categoryDataNodes) {
      const slug = getCategorySlug(dataNode);
      const { title, icon, description, priority } = dataNode;

      const nodeData = {
        title,
        icon,
        description,
        priority,
        slug,
        isTopLevel: !parent
      };

      const child: Node = {
        ...nodeData,
        id: createNodeId(`category-${slug}`),
        parent: parent ? parent.id : (null as any), // tslint:disable-line
        children: [],
        internal: {
          type: 'Category',
          contentDigest: createContentDigest(nodeData),
          owner: ''
        }
      };

      await createNode(child);
      const pageCount = await getPages(child);
      reporter.info(`registered new category '${slug}' with ${pageCount} pages`);

      if (parent) {
        createParentChildLink({
          parent,
          child
        });
      }

      await getCategories(child, `${slug}/*/*`);
    }
  };

  await getCategories(null, '*/*');
};

interface QueryData {
  [key: string]: {
    edges: {
      node: {
        slug: string;
      };
    }[];
  };
}

interface TagsQueryData {
  allPage: {
    edges: {
      node: {
        tags: string[];
      };
    }[];
  };
}

/**
 * Creates pages from the sourced page and category nodes.
 */
export const createPages: GatsbyNode['createPages'] = async ({
  actions: { createPage, createRedirect },
  graphql,
  reporter
}: CreatePagesArgs): Promise<void> => {
  /**
   * Simple helper function to create pages from a GraphQL query. This assumes the node has a slug,
   * which is used as `path` and `context`.
   *
   * @param {string} fieldName The GraphQL field name of the data
   * @param {string} component Path to the React component to use for the page
   * @returns {Promise<void>}
   */
  const createPagesFromNode = async (fieldName: string, component: string) => {
    const result = await graphql<QueryData>(`
      query {
        ${fieldName} {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);

    if (!result.data || result.errors) {
      reporter.panicOnBuild('failed to fetch all content', result.errors);
      return process.exit(1);
    }

    const data = result.data[fieldName];
    data.edges.forEach(({ node: { slug } }) => {
      createPage({
        path: slug,
        component,
        context: {
          slug
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
    const { errors, data } = await graphql<{ file: { childYaml: { redirects: { from: string; to: string }[] } } }>(`
      query {
        file(relativePath: { eq: "redirects.yml" }) {
          childYaml {
            redirects {
              from
              to
            }
          }
        }
      }
    `);

    if (errors) {
      reporter.panicOnBuild('Failed to read redirects', errors);
      return process.exit(1);
    }

    data?.file.childYaml.redirects.forEach(redirect => {
      createRedirect({
        fromPath: `/${redirect.from}`,
        toPath: `/${redirect.to}`,
        isPermanent: true
      });
    });
  };

  const encodeTag = (tag: string): string => {
    return tag.toLowerCase().replace(/\s/g, '-');
  };

  const createTags = async () => {
    const result = await graphql<TagsQueryData>(`
      query {
        allPage {
          edges {
            node {
              tags
            }
          }
        }
      }
    `);

    const pages = result.data!.allPage.edges.map(edge => edge.node);
    const tags = new Set(pages.flatMap(page => page.tags));

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

  await createPagesFromNode('allCategory', CATEGORY_TEMPLATE);
  await createPagesFromNode('allPage', PAGE_TEMPLATE);
  await createRedirects();
  await createTags();
};
