require('@babel/register')({
  extensions: ['.ts', '.tsx'],
  presets: ['@babel/preset-typescript']
});

export * from './gatsby/wrap-page-element';
export * from './gatsby/wrap-root-element';
