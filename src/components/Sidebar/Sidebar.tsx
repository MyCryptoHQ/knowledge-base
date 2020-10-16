import { FunctionComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../../theme/breakpoints';
import { Mdx } from '../../types/page';
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

interface Props {
  articles: Mdx[];
}

const Sidebar: FunctionComponent<Props> = ({ articles }) => (
  <SidebarWrapper>
    <Categories />
    <PopularArticles articles={articles} />
  </SidebarWrapper>
);

export default Sidebar;
