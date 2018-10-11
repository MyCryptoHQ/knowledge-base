import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../src/store/configureStore';

const store = configureStore();

/**
 * Add `react-redux` provider to the page (client-side).
 * @param history
 * @return {function({children: *}): *}
 */
export default function wrapWithProvider({ element }) {
  return <Provider store={store}>{element}</Provider>;
}
