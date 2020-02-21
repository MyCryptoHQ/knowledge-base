import React, { FunctionComponent } from 'react';
import PageContainer from '../components/ui/PageContainer';
import FeaturedCategories from '../components/FeaturedCategories';
import PopularArticles from '../components/PopularArticles';
import styled from 'styled-components';
import Container from '../components/ui/Container';
import breakpoint from '../theme/breakpoints';

const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: row;

  ${breakpoint('lg', 'max')`
    flex-direction: column;
  `};
`;

const Index: FunctionComponent = () => (
  <PageContainer>
    <HomeContainer>
      <FeaturedCategories />
      <PopularArticles />
    </HomeContainer>
  </PageContainer>
);

export default Index;
