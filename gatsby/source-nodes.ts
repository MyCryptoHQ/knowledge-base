import { Node, SourceNodesArgs } from 'gatsby';

/* tslint:disable */
const minimatch = require('minimatch');
/* tslint:enable */

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

module.exports = async ({
  actions: { createNode, createParentChildLink },
  createNodeId,
  createContentDigest,
  getNode,
  getNodes,
  reporter
}: SourceNodesArgs) => {
  const nodes: Node[] = getNodes();
  const pageNodes: PageNode[] = nodes.filter(node => node.internal.type === 'Mdx') as PageNode[];
  const categoryNodes = nodes.filter(node => node.internal.type === 'CategoryData');

  /**
   * Get a slug from a page data node.
   *
   * @param node {Node} The page data node to get the slug for.
   * @return {string} The slug for the page.
   */
  const getPageSlug = (node: Node) => {
    const parent = getNode(node.parent);
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
      const parent = getNode(node.parent);
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
    const parent = getNode(node.parent);
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
      const parentNode = getNode(node.parent);
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
