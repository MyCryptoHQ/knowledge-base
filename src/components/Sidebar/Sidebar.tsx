import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import PopularArticles from './PopularArticles';
import FeaturedCategories from './FeaturedCategories';
import breakpoint from '../../theme/breakpoints';

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
    <FeaturedCategories />
    <PopularArticles />
  </SidebarWrapper>
);

export default Sidebar;
