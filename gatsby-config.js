const { resolve } = require('path');
const { generateConfig } = require('gatsby-plugin-ts-config');

/**
 * Config files are stored in the `gatsby` folder.
 */
module.exports = generateConfig({
  configDir: resolve(__dirname, 'gatsby'),
  babel: true
});
