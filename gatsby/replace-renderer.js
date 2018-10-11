import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { configureStore } from '../src/store/configureStore';

/**
 * Add `react-redux` provider to the page (server-side).
 * @param bodyComponent
 * @param replaceBodyHTMLString
 */
export default function replaceRenderer({ bodyComponent, replaceBodyHTMLString }) {
  const store = configureStore();

  const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>;

  replaceBodyHTMLString(renderToString(<ConnectedBody />));
}
