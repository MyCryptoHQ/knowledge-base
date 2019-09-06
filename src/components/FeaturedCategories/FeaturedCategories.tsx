import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FeaturedCategory from './FeaturedCategory';
import { Category } from '../../models/category';
import './FeaturedCategories.scss';

interface QueryData {
  allCategory: {
    edges: {
      node: Category;
    }[];
  };
}

const FeaturedCategories: FunctionComponent = () => {
  const { allCategory } = useStaticQuery<QueryData>(
    graphql`
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
              icon
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
    `
  );

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
};

export default FeaturedCategories;
