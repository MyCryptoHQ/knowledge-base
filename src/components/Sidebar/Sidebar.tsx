import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../../theme/breakpoints';
import Categories from './Categories';
import PopularArticles from './PopularArticles';

const SidebarWrapper = styled.section`
  width: 30rem;

  a {
    color: ${({ theme }) => theme.text};
    font-weight: normal;
  }

  ${breakpoint('lg', 'max')`
    display: none;
  `};
`;

const Sidebar: FunctionComponent = () => (
  <SidebarWrapper>
    <Categories />
    <PopularArticles />
  </SidebarWrapper>
);

export default Sidebar;
