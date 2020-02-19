import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import FeaturedCategory from './FeaturedCategory';
import { Category } from '../../models/category';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import { FEATURED_CATEGORIES } from '../../config/categories';
import breakpoint from '../../theme/breakpoints';

interface QueryData {
  allCategory: {
    edges: {
      node: Category;
    }[];
  };
}

const StyledFeaturedCategories = styled(Section)`
  padding-left: 0;
  padding-right: 0;
`;

const OnboardingHeading = styled(Heading)`
  ${breakpoint('lg', 'max')`
    display: none;
  `};
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
            }
          }
        }
      }
    `
  );

  const categories = allCategory.edges.map(edge => edge.node);
  const featuredCategories = FEATURED_CATEGORIES.map(category => {
    const categoryData = categories.find(item => item.slug === category.slug);

    return {
      ...category,
      data: categoryData
    };
  }).filter(category => category.data !== undefined);

  return (
    <StyledFeaturedCategories>
      <OnboardingHeading as="h2">Onboarding</OnboardingHeading>
      {featuredCategories.map(category => (
        <FeaturedCategory category={category.data!} image={category.image} />
      ))}
    </StyledFeaturedCategories>
  );
};

export default FeaturedCategories;
