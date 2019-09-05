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
  const categoryNodes = nodes.filter(node => node.internal.type === 'CategoryData');

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
   * Get all category data nodes for `pattern`.
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
      reporter.info(`Registered new category '${slug}'`);

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
