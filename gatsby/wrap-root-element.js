import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../src/store';

/**
 * All providers should be used in this file, so they work properly in combination with Gatsby.
 */
export const wrapRootElement = ({ element }) => {
  const store = configureStore();
  return <Provider store={store}>{element}</Provider>;
};
