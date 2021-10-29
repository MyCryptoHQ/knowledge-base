import { Trans } from '@lingui/macro';
import { Body, Flex, SubHeader } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/roboto-mono/400.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Search } from './Search';

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
    <Header>
      <SubHeader>
        <Flex alignItems="center">
          <Body fontSize="tiny" marginRight="3">
            <Trans>What can we help you with?</Trans>
          </Body>
          <Search />
        </Flex>
      </SubHeader>
    </Header>

    {children}

    <Footer />
  </Flex>
);
