const { generateConfig } = require('gatsby-plugin-ts-config');
const { resolve } = require('path');

/**
 * Config files are stored in the `gatsby` folder.
 */
module.exports = generateConfig({
  configDir: resolve(__dirname, 'gatsby'),
  babel: true
});
