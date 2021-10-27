import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { en as plurals } from 'make-plural/plurals';
import { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components';
import { messages as en } from './locales/en/messages';
import { theme } from './theme';
import 'regenerator-runtime';

i18n.loadLocaleData('en', { plurals });
i18n.load({ en });
i18n.activate('en');

const Root: FunctionComponent = ({ children }) => (
  <I18nProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <Layout>{children}</Layout>
    </ThemeProvider>
  </I18nProvider>
);

export default Root;
