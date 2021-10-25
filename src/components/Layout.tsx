import { Flex } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/roboto-mono/400.css';
import { Footer } from './Footer';
import { Header } from './Header';

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby {
    margin: 0;
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background.page};
  }
`;

export const Layout: FunctionComponent = ({ children }) => (
  <Flex flexDirection="column" minHeight="100vh">
    <GlobalStyle />
    <Header />

    {children}

    <Footer />
  </Flex>
);
