const { useGatsbyConfig } = require('gatsby-plugin-ts-config');

/**
 * Config files are stored in the `gatsby` folder.
 */
module.exports = useGatsbyConfig(() => require('./config/gatsby-config'), {
  type: 'babel'
});
