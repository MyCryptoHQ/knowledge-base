import React from 'react';
import { WrapRootElementBrowserArgs } from 'gatsby';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '../src/store';
import theme from '../src/theme';

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </Provider>
  );
};
