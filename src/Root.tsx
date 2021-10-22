import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { en as plurals } from 'make-plural/plurals';
import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components';
import { messages as en } from './locales/en/messages';
import { configureStore } from './store';
import { theme } from './theme';
import 'regenerator-runtime';

const store = configureStore();

i18n.loadLocaleData('en', { plurals });
i18n.load({ en });
i18n.activate('en');

const Root: FunctionComponent = ({ children }) => (
  <I18nProvider i18n={i18n}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </Provider>
  </I18nProvider>
);

export default Root;
