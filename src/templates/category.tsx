import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Breadcrumbs from '../components/Breadcrumbs';
import CategoryOverview from '../components/CategoryOverview';
import MetaData from '../components/MetaData';
import Sidebar from '../components/Sidebar';
import Container from '../components/ui/Container';
import PageContainer from '../components/ui/PageContainer';
import Section from '../components/ui/Section';
import SubHeader from '../components/ui/SubHeader';
import { Category as CategoryData } from '../models/category';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    category: CategoryData;
  };
}

const CategoryContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const CategorySection = styled(Section)``;

const Category: FunctionComponent<Props> = ({ data: { category } }) => (
  <PageContainer>
    <MetaData title={category.title} description={category.description} />

    <SubHeader>
      <Breadcrumbs parent={category.parent} />
    </SubHeader>

    <CategorySection>
      <CategoryContainer>
        <Sidebar />
        <CategoryOverview category={category} />
      </CategoryContainer>
    </CategorySection>
  </PageContainer>
);

export const query = graphql`
  query Category($slug: String!) {
    category(slug: { eq: $slug }) {
      title
      slug
      description
      childrenCategory {
        title
        slug
        description
        childrenPage {
          title
        }
        childrenCategory {
          title
        }
      }
      childrenPage {
        title
        slug
        childMdx {
          excerpt(pruneLength: 500)
        }
      }
      parent {
        ... on Category {
          title
          slug
        }
      }
    }
  }
`;

export default Category;
