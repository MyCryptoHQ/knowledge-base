const path = require('path');
const crypto = require('crypto');
const yaml = require('js-yaml');
const fs = require('fs');
const lunr = require('lunr');

const TEMPLATE_DIR = path.resolve(__dirname, '../src/templates');

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
 * Get all pages.
 * @param actions
 * @return {Promise<*[]>}
 */
const getPages = async actions => {
  const { graphql } = actions;

  const {
    data: {
      allPage: { edges }
    }
  } = await graphql(`
    query Pages {
      allPage {
        edges {
          node {
            id
            title
            slug
            originalSlug
          }
        }
      }
    }
  `);

  return edges.map(edge => edge.node);
};

/**
 * Register a page to Gatsby.
 * @param page
 * @param actions
 */
const registerPage = (page, actions) => {
  const { createPage } = actions;

  createPage({
    path: `/${page.slug}`,
    component: path.join(TEMPLATE_DIR, 'page.tsx'),
    context: {
      slug: page.slug,
      file: `${page.originalSlug}.md`
    }
  });
};

/**
 * Get all icons in `assets/images/icons` and parse them as a key-value object.
 * @param actions
 * @return {Promise<*>}
 */
const getIcons = async actions => {
  const { graphql } = actions;

  const result = await graphql(`
    query IconsQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "icons" } }
      ) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  return result.data.allFile.edges.reduce((target, current) => {
    target[current.node.name] = current.node.publicURL;
    return target;
  }, {});
};

/**
 * Add icon to categories.
 * @param actions
 * @return {void}
 */
const addIconsToCategories = async actions => {
  const { getNodes, createNode, createParentChildLink } = actions;

  const nodes = getNodes();
  const icons = await getIcons(actions);

  nodes.filter(node => node.internal.type === 'Category').forEach(category => {
    const iconData = {
      icon: icons[category.icon],
      parent: category.id
    };

    const node = createNodeData(iconData, `icon-data-${category.slug}`, `IconData`, actions);
    createNode(node);
    createParentChildLink({ parent: category, child: node });
  });
};

const getCategories = async actions => {
  const { graphql } = actions;

  const {
    data: {
      allCategory: { edges }
    }
  } = await graphql(`
    query Categories {
      allCategory {
        edges {
          node {
            slug
            redirects {
              from
              to
            }
          }
        }
      }
    }
  `);

  return edges.map(edge => edge.node);
};

/**
 * Register a category to Gatsby.
 * @param category
 * @param actions
 * @return *{}
 */
const registerCategory = async (category, actions) => {
  const { createPage } = actions;

  createPage({
    path: `/${category.slug}`,
    component: path.join(TEMPLATE_DIR, 'category.tsx'),
    context: {
      slug: category.slug
    }
  });
};

const registerTopLevelRedirects = actions => {
  const { createRedirect } = actions;

  let file;
  try {
    file = fs.readFileSync(path.join(__dirname, '../src/content/redirects.yml'), 'utf-8');
  } catch (error) {
    // Ignore error if file does not exist
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  if (file) {
    const document = yaml.safeLoad(file);

    document.redirects.forEach(redirect => {
      createRedirect({
        fromPath: `/${redirect.from}`,
        toPath: `/${redirect.to}`,
        isPermanent: true,
        redirectInBrowser: true
      });
    });
  }
};

/**
 * Setup redirects of a category.
 * @param category
 * @param actions
 * @return {void}
 */
const registerCategoryRedirects = (category, actions) => {
  const { createRedirect } = actions;

  if (category.redirects) {
    category.redirects.forEach(({ from, to }) => {
      createRedirect({
        fromPath: `/${category.slug}/${from}`,
        toPath: `/${category.slug}/${to}`,
        isPermanent: true,
        redirectInBrowser: true
      });
    });
  }
};

/**
 * Setup redirects of a page.
 * @param page
 * @param actions
 * @return {void}
 */
const registerPageRedirects = (page, actions) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/${page.slug}.html`,
    toPath: `/${page.slug}`,
    isPermanent: true,
    redirectInBrowser: true
  });
};

/**
 * Register categories and pages.
 * @param getNodes
 * @param actions
 * @param createNodeId
 * @param graphql
 * @return {Promise<void>}
 */
module.exports = async ({ actions, createNodeId, graphql, getNodes }) => {
  const gatsbyActions = {
    ...actions,
    createNodeId,
    graphql,
    getNodes
  };

  await addIconsToCategories(gatsbyActions);
  const categories = await getCategories(gatsbyActions);
  categories.forEach(category => {
    registerCategory(category, gatsbyActions);
    registerCategoryRedirects(category, gatsbyActions);
  });

  const pages = await getPages(gatsbyActions);
  pages.forEach(page => {
    registerPage(page, gatsbyActions);
    registerPageRedirects(page, gatsbyActions);
  });

  registerTopLevelRedirects(gatsbyActions);
};
