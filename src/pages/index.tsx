import React, { FunctionComponent } from 'react';
import PageContainer from '../components/ui/PageContainer';
import Header from '../components/ui/Header';
import SubHeader from '../components/ui/SubHeader';
import SearchHero from '../components/SearchHero';
import FeaturedCategories from '../components/FeaturedCategories';
import PopularArticles from '../components/PopularArticles';
import Contributing from '../components/Contributing';

const Index: FunctionComponent = () => (
  <PageContainer>
    <Header showSearch={false}>
      <SearchHero />
    </Header>
    <SubHeader>
      <FeaturedCategories />
    </SubHeader>
    <PopularArticles />
    <Contributing />
  </PageContainer>
);

export default Index;
