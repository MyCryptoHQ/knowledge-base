import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Search from '../Search';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import breakpoint from '../../theme/breakpoints';

interface Props {
  showSearch: boolean;
}

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  white-space: nowrap;
  padding: 2.5rem 0;
`;

const FlexWrapper = styled.div`
  flex: 1;

  ${breakpoint('lg')`
    display: none;
  `};
`;

export interface Entry {
  title: string;
  url: string;
  external?: boolean;
}

const entries: Entry[] = [
  {
    title: 'Knowledge base',
    url: '/'
  },
  {
    title: 'Contact us',
    url: '/contact-us'
  },
  {
    title: 'Back to MyCrypto',
    url: 'https://mycrypto.com',
    external: true
  }
];

const Navigation: FunctionComponent<Props> = ({ showSearch }) => (
  <Container>
    <StyledNavigation>
      <MobileNavigation entries={entries} />
      <Logo />
      <FlexWrapper />
      <DesktopNavigation entries={entries} />
      {showSearch && <Search compact={false} />}
    </StyledNavigation>
  </Container>
);

export default Navigation;
