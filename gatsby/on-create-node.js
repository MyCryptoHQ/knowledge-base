const crypto = require('crypto');
const yaml = require('js-yaml');
const fs = require('fs');

/**
 * Parse YAML data of categories.
 * @param node
 * @param actions
 * @param createNodeId
 * @return {Promise<void>}
 */
module.exports = async ({ node, actions, createNodeId }) => {
  if (node.internal.type !== 'File' || node.internal.mediaType !== 'text/yaml') {
    return;
  }

  const { createNode, createParentChildLink } = actions;

  const document = yaml.safeLoad(fs.readFileSync(node.absolutePath, 'utf8'));
  const nodeContent = JSON.stringify(document);

  const yamlNode = {
    ...document,
    priority: document.priority || 0,
    id: createNodeId(`category-data-${node.id}`),
    parent: node.id,
    children: [],
    internal: {
      type: 'CategoryData',
      content: nodeContent,
      contentDigest: crypto
        .createHash('md5')
        .update(nodeContent)
        .digest('hex')
    }
  };

  createNode(yamlNode);
  createParentChildLink({ parent: node, child: yamlNode });
};
