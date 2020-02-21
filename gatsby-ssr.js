require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  presets: ['@babel/preset-typescript']
});

exports.wrapPageElement = require('./gatsby/wrap-page-element').wrapPageElement;
exports.wrapRootElement = require('./gatsby/wrap-root-element').wrapRootElement;
