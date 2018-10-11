const crypto = require('crypto');
const minimatch = require('minimatch');

/**
 * Create node data that can be used with `createNode`.
 * @param data
 * @param id
 * @param type
 * @param actions
 * @return {{id: *, children: Array, internal: {type: *, content: string, contentDigest: string}}}
 */
const createNodeData = (data, id, type, actions) => {
  const { createNodeId } = actions;

  const nodeContent = JSON.stringify(data);

  return {
    ...data,
    id: createNodeId(id),
    children: [],
    internal: {
      type,
      content: nodeContent,
      contentDigest: crypto
        .createHash('md5')
        .update(nodeContent)
        .digest('hex')
    }
  };
};

/**
 * Get page data from a File node.
 * @param node
 * @param actions
 * @return {*}
 */
const getPageData = (node, actions) => {
  const { getNode } = actions;

  return node.children
    .map(child => getNode(child))
    .find(child => child.internal.type === 'MarkdownRemark');
};

/**
 * Get all files in a category from File nodes.
 * @param nodes
 * @param pattern
 * @param parent
 * @param actions
 * @return {*}
 */
const getPages = (nodes, pattern, parent, actions) => {
  const { createNode } = actions;

  const pages = [];

  nodes
    .filter(node => node.internal.type === 'File' && node.extension === 'md')
    .filter(node => minimatch(node.relativeDirectory, pattern))
    .forEach(node => {
      const pageData = getPageData(node, actions);

      const slug = node.relativePath.replace(/\.md$/, '');

      const parsedPageData = {
        title: pageData.frontmatter.title,
        filename: node.name,
        description: pageData.frontmatter.description,
        priority: pageData.frontmatter.priority,
        datePublished: pageData.frontmatter.date_published,
        dateModified: pageData.frontmatter.date_modified,
        slug,
        originalSlug: slug,
        parent: parent.id,
        parentSlug: parent.slug,
        breadcrumbs: [...parent.breadcrumbs]
      };

      parsedPageData.breadcrumbs.push({
        title: parsedPageData.title,
        slug: parsedPageData.slug
      });

      const pageNode = createNodeData(
        parsedPageData,
        `page-${parsedPageData.slug}`,
        'Page',
        actions
      );
      createNode(pageNode);

      pages.push(pageNode);
    });

  return pages;
};

/**
 * Get a single page by `slug`.
 * @param nodes
 * @param slug
 */
const getPage = (nodes, slug) => {
  return nodes.filter(node => node.internal.type === 'Page').find(node => node.slug === slug);
};

/**
 * Get category data from a File node.
 * @param node
 * @param actions
 * @return {*}
 */
const getCategoryData = (node, actions) => {
  const { getNode } = actions;

  return node.children
    .map(child => getNode(child))
    .find(child => child.internal.type === 'CategoryData');
};

/**
 * Parse all file nodes to categories and return the categories and pages.
 * @param nodes
 * @param pattern
 * @param parent
 * @param actions
 * @return {*}
 */
const getCategories = (nodes, pattern, parent, actions) => {
  const { createNode, createParentChildLink } = actions;

  return nodes
    .filter(
      node => node.internal.type === 'File' && node.name === 'category' && node.extension === 'yml'
    )
    .filter(node => minimatch(node.relativeDirectory, pattern))
    .map(node => {
      const categoryData = {
        ...getCategoryData(node, actions),
        parent: parent ? parent.id : null,
        parentSlug: parent ? parent.slug : null,
        slug: node.relativeDirectory,
        isTopLevel: !parent,
        breadcrumbs: []
      };

      if (parent) {
        categoryData.breadcrumbs.push(...parent.breadcrumbs);
      }

      categoryData.breadcrumbs.push({
        title: categoryData.title,
        slug: categoryData.slug
      });

      const categoryNode = createNodeData(
        categoryData,
        `category-${categoryData.slug}`,
        'Category',
        actions
      );
      createNode(categoryNode);

      // Get pages in the category
      const pages = getPages(nodes, categoryNode.slug, categoryNode, actions);
      pages.forEach(pageNode => {
        createParentChildLink({ parent: categoryNode, child: pageNode });
      });

      // Get subcategories
      const subCategories = getCategories(nodes, `${categoryNode.slug}/*`, categoryNode, actions);
      subCategories.forEach(subCategoryNode => {
        createParentChildLink({ parent: categoryNode, child: subCategoryNode });
      });

      return categoryNode;
    });
};

const registerLinks = (nodes, actions) => {
  const { createNode, createParentChildLink } = actions;

  return nodes
    .filter(node => node.internal.type === 'Category')
    .filter(node => node.links)
    .forEach(category => {
      category.links.forEach(link => {
        const page = { ...getPage(nodes, link) };
        page.parent = category.id;
        page.parentSlug = category.slug;
        page.slug = `${category.slug}/${page.filename}`;
        page.breadcrumbs = [...category.breadcrumbs];

        page.breadcrumbs.push({
          title: page.title,
          slug: page.slug
        });

        const newPageNode = createNodeData(page, `page-${page.slug}`, 'Page', actions);
        createNode(newPageNode);
        createParentChildLink({ parent: category, child: newPageNode });
      });
    });
};

module.exports = ({ getNodes, getNode, createNodeId, actions }) => {
  const nodes = getNodes();
  getCategories(nodes, '*', null, { ...actions, getNode, createNodeId });

  // Get nodes including new categories and pages
  const newNodes = getNodes();
  registerLinks(newNodes, { ...actions, getNode, createNodeId });
};
