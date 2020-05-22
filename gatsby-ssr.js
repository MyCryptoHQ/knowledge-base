require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  presets: ['@babel/preset-typescript'],
  plugins: ['@babel/plugin-proposal-nullish-coalescing-operator']
});

exports.wrapPageElement = require('./gatsby/wrap-page-element').wrapPageElement;
exports.wrapRootElement = require('./gatsby/wrap-root-element').wrapRootElement;
