const minimatch = require('minimatch');

module.exports = async ({
  actions: { createNode, createParentChildLink },
  createNodeId,
  createContentDigest,
  getNode,
  getNodes,
  reporter
}) => {
  const nodes = getNodes();
  const pageNodes = nodes.filter(node => node.internal.type === 'Mdx');
  const categoryNodes = nodes.filter(node => node.internal.type === 'CategoryData');

  /**
   * Get a slug from a page data node.
   *
   * @param node The page data node to get the slug for.
   * @return {string} The slug for the page.
   */
  const getPageSlug = node => {
    const parent = getNode(node.parent);
    return parent.relativePath.replace(/\.md$/, '');
  };

  /**
   * Register all pages for `categoryNode`.
   *
   * @param categoryNode The category to register the pages for.
   * @return {number} The number of pages registered for the category.
   */
  const getPages = async categoryNode => {
    const pageDataNodes = pageNodes.filter(node => {
      const parent = getNode(node.parent);
      return minimatch(parent.relativePath, `${categoryNode.slug}/*`);
    });

    for (const dataNode of pageDataNodes) {
      const slug = getPageSlug(dataNode);
      const {
        frontmatter: {
          title,
          description,
          priority,
          date_published: datePublished,
          date_modified: dateModified
        }
      } = dataNode;

      const nodeData = {
        title,
        description,
        priority,
        datePublished,
        dateModified,
        slug
      };

      const node = {
        ...nodeData,
        id: createNodeId(`page-${slug}`),
        parent: categoryNode.id,
        children: [],
        internal: {
          type: 'Page',
          contentDigest: createContentDigest(nodeData)
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
   * @param node The category data node to get the slug for.
   * @return {string} The slug for the category.
   */
  const getCategorySlug = node => {
    const parent = getNode(node.parent);
    return parent.relativePath.replace('/category.yml', '');
  };

  /**
   * Register all categories for `pattern`.
   *
   * @param parent The parent of the category nodes.
   * @param pattern The glob pattern to get all category file nodes for.
   */
  const getCategories = async (parent, pattern) => {
    const categoryDataNodes = categoryNodes.filter(node => {
      const parent = getNode(node.parent);
      return minimatch(parent.relativePath, pattern);
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

      const child = {
        ...nodeData,
        id: createNodeId(`category-${slug}`),
        parent: parent ? parent.id : null,
        children: [],
        internal: {
          type: 'Category',
          contentDigest: createContentDigest(nodeData)
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
