import { graphql, useStaticQuery } from 'gatsby';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FEATURED_CATEGORIES } from '../../../config/categories';
import { Yaml } from '../../../types/category';
import { Link } from '../../Link';
import Heading from '../../ui/Heading';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';

interface QueryData {
  allYaml: {
    nodes: Yaml[];
  };
}

const CategoriesWrapper = styled.section`
  margin-bottom: 7.5rem;
`;

const Categories: FunctionComponent = () => {
  // TODO: This can probably be combined with `components/FeaturedCategories`
  const { allYaml } = useStaticQuery<QueryData>(
    graphql`
      query {
        allYaml(filter: { category: { slug: { eq: null } } }) {
          nodes {
            title
            slug
          }
        }
      }
    `
  );

  const categories = FEATURED_CATEGORIES.map((category) => {
    const categoryData = allYaml.nodes.find((item) => item.slug === category.slug);

    return {
      ...category,
      data: categoryData
    };
  }).filter((category) => category.data !== undefined);

  return (
    <CategoriesWrapper>
      <Heading as="h3">Onboarding</Heading>
      <List>
        {categories.map((category) => (
          <ListItem key={category.slug}>
            <Link to={`/${category.slug}`}>{category.data!.title}</Link>
          </ListItem>
        ))}
      </List>
    </CategoriesWrapper>
  );
};

export default Categories;
