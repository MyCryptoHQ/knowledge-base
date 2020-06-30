import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FEATURED_CATEGORIES } from '../../../config/categories';
import { Category } from '../../../models/category';
import Link from '../../Link';
import Heading from '../../ui/Heading';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';

interface QueryData {
  allCategory: {
    edges: Array<{
      node: Category;
    }>;
  };
}

const FeaturedCategoriesWrapper = styled.section`
  margin-bottom: 7.5rem;
`;

const FeaturedCategories: FunctionComponent = () => {
  // TODO: This can probably be combined with `components/FeaturedCateogries`
  const { allCategory } = useStaticQuery<QueryData>(
    graphql`
      query {
        allCategory(filter: { isTopLevel: { eq: true } }, sort: { fields: [priority], order: DESC }) {
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
    <FeaturedCategoriesWrapper>
      <Heading as="h3">Onboarding</Heading>
      <List>
        {featuredCategories.map(category => (
          <ListItem key={category.slug}>
            <Link to={category.slug}>{category.data!.title}</Link>
          </ListItem>
        ))}
      </List>
    </FeaturedCategoriesWrapper>
  );
};

export default FeaturedCategories;
