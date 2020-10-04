import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FEATURED_CATEGORIES } from '../../config/categories';
import breakpoint from '../../theme/breakpoints';
import { Yaml } from '../../types/category';
import Heading from '../ui/Heading';
import Section from '../ui/Section';
import FeaturedCategory from './FeaturedCategory';

interface QueryData {
  allYaml: {
    nodes: Yaml[];
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
  const { allYaml } = useStaticQuery<QueryData>(
    graphql`
      query {
        allYaml(filter: { categoryId: { eq: null } }, sort: { fields: [priority], order: DESC }) {
          nodes {
            title
            slug
          }
        }
      }
    `
  );

  const featuredCategories = FEATURED_CATEGORIES.map((category) => {
    const categoryData = allYaml.nodes.find((item) => item.slug === category.slug);

    return {
      ...category,
      data: categoryData
    };
  }).filter((category) => category.data !== undefined);

  return (
    <StyledFeaturedCategories>
      <OnboardingHeading as="h2">Onboarding</OnboardingHeading>
      {featuredCategories.map((category) => (
        <FeaturedCategory key={category.slug} category={category.data!} image={category.image} />
      ))}
    </StyledFeaturedCategories>
  );
};

export default FeaturedCategories;
