require('@babel/register')({
  extensions: ['.ts', '.tsx'],
  presets: ['@babel/preset-typescript'],
  plugins: ['@babel/plugin-proposal-nullish-coalescing-operator']
});

module.exports.sourceNodes = require('./gatsby/source-nodes');
module.exports.createPages = require('./gatsby/create-pages');
