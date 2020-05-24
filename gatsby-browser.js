require('@babel/register')({
  extensions: ['.ts', '.tsx'],
  presets: ['@babel/preset-typescript'],
  plugins: ['@babel/plugin-proposal-nullish-coalescing-operator']
});

export * from './gatsby/wrap-page-element';
export * from './gatsby/wrap-root-element';
