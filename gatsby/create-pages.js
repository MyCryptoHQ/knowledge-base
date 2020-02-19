const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const REDIRECTS_FILE = path.resolve(__dirname, '../content/redirects.yml');
const CATEGORY_TEMPLATE = path.resolve(__dirname, '../src/templates/category.tsx');
const PAGE_TEMPLATE = path.resolve(__dirname, '../src/templates/page.tsx');

module.exports = async ({ actions: { createPage, createRedirect }, graphql, reporter }) => {
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
   * Reads `content/redirects.yml` and registers all redirects.
   *
   * @returns {Promise<void>}
   */
  const createRedirects = async () => {
    let file;
    try {
      file = fs.readFileSync(REDIRECTS_FILE, 'utf-8');
    } catch (error) {
      // Ignore error if file does not exist
      if (error.code === 'ENOENT') {
        reporter.warn('`content/redirects.yml` does not exist');
        return process.exit(1);
      }

      reporter.panicOnBuild('failed to read `content/redirects.yml`', error);
      return process.exit(1);
    }

    if (file) {
      const document = yaml.safeLoad(file);
      document.redirects.forEach(redirect =>
        createRedirect({
          fromPath: `/${redirect.from}`,
          toPath: `/${redirect.to}`,
          isPermanent: true,
          redirectInBrowser: true
        })
      );
    }
  };

  await createPages('allCategory', CATEGORY_TEMPLATE);
  await createPages('allPage', PAGE_TEMPLATE);
  await createRedirects();
};
