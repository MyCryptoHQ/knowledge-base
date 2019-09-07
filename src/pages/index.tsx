import React, { FunctionComponent } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import SearchHero from '../components/SearchHero';
import FeaturedCategories from '../components/FeaturedCategories';
import PopularArticles from '../components/PopularArticles';
import Contributing from '../components/Contributing';

const Index: FunctionComponent = () => (
  <div className="full-width">
    <Header showSearch={false}>
      <SearchHero />
    </Header>
    <SubHeader>
      <FeaturedCategories />
    </SubHeader>
    <PopularArticles />
    <Contributing />
  </div>
);

export default Index;
