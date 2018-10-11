import * as React from 'react';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import SearchHero from '../components/SearchHero/SearchHero';
import Categories from '../components/Categories/Categories';
import FeaturedCategory from '../components/FeaturedCategory/FeaturedCategory';
import { Category } from '../models/category';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';

interface Props {
  data: {
    allCategory: {
      edges: {
        node: Category;
      }[];
    };
  };
}

const Index: React.StatelessComponent<Props> = ({
  data: {
    allCategory: { edges }
  }
}) => {
  const categories = edges.map(edge => edge.node);
  return (
    <Layout>
      <div className="full-width">
        <Header showSearch={false}>
          <SearchHero />
        </Header>
        <SubHeader>
          <div className="row featured">
            <div className="col-xs-12 col-sm-12 col-md-3 col-gutter-lr">
              <FeaturedCategory category="getting-started" categories={categories} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-gutter-lr">
              <FeaturedCategory category="security" categories={categories} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-gutter-lr">
              <FeaturedCategory category="faq" categories={categories} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-gutter-lr">
              <FeaturedCategory category="contributing" categories={categories} />
            </div>
          </div>
        </SubHeader>
        <div className="container">
          <div className="home row center-xs">
            <div className="col-xs-10">
              <section>
                <div className="row">
                  <div className="col-xs col-gutter-lr">
                    <h2>All Categories</h2>
                  </div>
                </div>
                <Categories categories={categories} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Home {
    allCategory(filter: { isTopLevel: { eq: true } }, sort: { fields: [priority], order: DESC }) {
      edges {
        node {
          title
          slug
          description
          childIconData {
            icon
          }
          childrenPage {
            title
          }
          childrenCategory {
            title
          }
        }
      }
    }
  }
`;

export default Index;
