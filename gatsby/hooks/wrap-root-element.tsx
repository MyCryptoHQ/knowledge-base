import { WrapRootElementBrowserArgs } from 'gatsby';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '../../src/store';
import theme from '../../src/theme';

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs): ReactElement => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </Provider>
  );
};
