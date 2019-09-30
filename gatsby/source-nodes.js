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
      reporter.info(`Registered new category '${slug}' with ${pageCount} pages`);

      if (parent) {
        createParentChildLink({
          parent,
          child
        });
      }

      await getCategories(child, `${slug}/*/*`);
    }
  };

  /**
   * Add all related article nodes to the new page nodes.
   */
  const getRelatedArticles = async () => {
    const newPageNodes = getNodes().filter(node => node.internal.type === 'Page');

    for (const pageNode of newPageNodes) {
      const pageData = getNode(pageNode.children[0]);

      if (pageData.frontmatter.related_articles) {
        for (const relatedArticle of pageData.frontmatter.related_articles) {
          let title;
          let url;
          let external;

          // URL is a slug of another page
          if (!relatedArticle.url.match(/https?:\/\//)) {
            const relatedPage = newPageNodes.find(node => node.slug === relatedArticle.url);
            if (!relatedPage) {
              reporter.warn(
                `Could not find page for related article '${relatedArticle.url}' in '${
                  pageNode.slug
                }', ignoring.`
              );
              continue;
            }

            title = relatedPage.title;
            url = `/${relatedArticle.url}`;
            external = false;
          }

          // URL is external
          if (relatedArticle.url.match(/https?:\/\//)) {
            if (!relatedArticle.title) {
              reporter.warn(
                `Missing title for related article '${relatedArticle.url}' in '${
                  pageNode.slug
                }', ignoring.`
              );
              continue;
            }

            title = relatedArticle.title;
            url = relatedArticle.url;
            external = true;
          }

          const nodeData = {
            title,
            url,
            external
          };

          const child = {
            ...nodeData,
            id: createNodeId(`related-article-${relatedArticle.url}`),
            parent: pageNode.id,
            children: [],
            internal: {
              type: 'RelatedArticle',
              contentDigest: createContentDigest(nodeData)
            }
          };

          await createNode(child);
          createParentChildLink({ parent: pageNode, child });
        }
      }
    }
  };

  await getCategories(null, '*/*');
  await getRelatedArticles();
};
