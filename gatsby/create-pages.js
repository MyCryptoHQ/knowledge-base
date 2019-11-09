const path = require('path');

const CATEGORY_TEMPLATE = path.resolve(__dirname, '../src/templates/category.tsx');
const PAGE_TEMPLATE = path.resolve(__dirname, '../src/templates/page.tsx');

module.exports = async ({ actions: { createPage }, graphql, reporter }) => {
  /**
   * Simple helper function to create pages from a GraphQL query. This assumes the node has a slug,
   * which is used as `path` and `context`.
   *
   * @param {string} fieldName The GraphQL field name of the data
   * @param {string} component Path to the React component to use for the page
   * @returns {Promise<void>}
   */
  const createPages = async (fieldName, component) => {
    const result = await graphql(`
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

    if (result.errors) {
      return reporter.panicOnBuild('Failed to fetch all content', result.errors);
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

  await createPages('allCategory', CATEGORY_TEMPLATE);

  await createPages('allPage', PAGE_TEMPLATE);
};
