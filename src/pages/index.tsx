import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import FeaturedCategories from '../components/FeaturedCategories';
import Hero from '../components/Header/Hero';
import PopularArticles from '../components/PopularArticles';
import Search from '../components/Search';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import PageContainer from '../components/ui/PageContainer';
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
    <Hero>
      <Heading as="h2">How can we help you?</Heading>
      <Search compact={false} maxWidth={'50rem'} />
    </Hero>
    <HomeContainer>
      <FeaturedCategories />
      <PopularArticles />
    </HomeContainer>
  </PageContainer>
);

export default Index;
