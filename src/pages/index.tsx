import * as React from 'react';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import SearchHero from '../components/SearchHero/SearchHero';
import Layout from '../components/Layout/Layout';
import FeaturedCategories from '../components/FeaturedCategories/FeaturedCategories';
import PopularArticles from '../components/PopularArticles/PopularArticles';
import Contributing from '../components/Contributing/Contributing';

const Index: React.StatelessComponent = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Index;
