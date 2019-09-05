const path = require('path');

const CATEGORY_TEMPLATE = path.resolve(__dirname, '../src/templates/category.tsx');
const PAGE_TEMPLATE = path.resolve(__dirname, '../src/templates/page.tsx');

module.exports = async ({ actions: { createPage }, graphql, reporter }) => {
  const createCategoryPages = async () => {
    const result = await graphql(`
      query {
        allCategory {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);

    if (result.errors) {
      reporter.panicOnBuild('Failed to fetch all categories', result.errors);
    }

    result.data.allCategory.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: CATEGORY_TEMPLATE,
        context: {
          slug: node.slug
        }
      });
    });
  };

  const createContentPages = async () => {
    const result = await graphql(`
      query {
        allPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);

    if (result.errors) {
      reporter.panicOnBuild('Failed to fetch all pages', result.errors);
    }

    result.data.allPage.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: PAGE_TEMPLATE,
        context: {
          slug: node.slug
        }
      });
    });
  };

  await createCategoryPages();
  await createContentPages();
};
