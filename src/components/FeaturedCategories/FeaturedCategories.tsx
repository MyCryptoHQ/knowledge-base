import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import FeaturedCategory from './FeaturedCategory';
import { Category } from '../../models/category';
import Section from '../ui/Section';

interface QueryData {
  allCategory: {
    edges: {
      node: Category;
    }[];
  };
}

const StyledFeaturedCategories = styled(Section)`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
`;

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
    <StyledFeaturedCategories>
      <FeaturedCategory category="troubleshooting" categories={categories} />
      <FeaturedCategory category="how-to" categories={categories} />
      <FeaturedCategory category="staying-safe" categories={categories} />
      <FeaturedCategory category="general-knowledge" categories={categories} />
    </StyledFeaturedCategories>
  );
};

export default FeaturedCategories;
