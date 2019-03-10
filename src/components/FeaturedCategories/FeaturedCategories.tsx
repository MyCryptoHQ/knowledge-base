import * as React from 'react';
import FeaturedCategory from './FeaturedCategory/FeaturedCategory';
import { graphql, StaticQuery } from 'gatsby';
import { Category } from '../../models/category';
import './FeaturedCategories.scss';

interface QueryData {
  allCategory: {
    edges: {
      node: Category;
    }[];
  };
}

const FeaturedCategories: React.StatelessComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        allCategory(
          filter: { isTopLevel: { eq: true } }
          sort: { fields: [priority], order: DESC }
        ) {
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
    `}
    render={({ allCategory }: QueryData) => {
      const categories = allCategory.edges.map(edge => edge.node);
      return (
        <>
          <div className="row featured-categories">
            <div className="col-xs-12 col-sm-12 col-md-4 col-md-offset-2">
              <FeaturedCategory category="troubleshooting" categories={categories} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <FeaturedCategory category="how-to" categories={categories} />
            </div>
          </div>
          <div className="row featured-categories">
            <div className="col-xs-12 col-sm-12 col-md-4 col-md-offset-2">
              <FeaturedCategory category="staying-safe" categories={categories} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <FeaturedCategory category="general-knowledge" categories={categories} />
            </div>
          </div>
        </>
      );
    }}
  />
);

export default FeaturedCategories;
