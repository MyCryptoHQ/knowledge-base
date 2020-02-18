import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/ui/PageContainer';
import Header from '../components/ui/Header';
import SubHeader from '../components/ui/SubHeader';
import { Category as CategoryData } from '../models/category';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaData from '../components/MetaData';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import CategoryOverview from '../components/CategoryOverview';

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

const Category: FunctionComponent<Props> = ({ data: { category } }) => (
  <PageContainer>
    <MetaData title={category.title} description={category.description} />

    <Header />
    <SubHeader>
      <Breadcrumbs parent={category.parent} />
    </SubHeader>

    <Section>
      <CategoryContainer>
        <Sidebar />
        <CategoryOverview category={category} />
      </CategoryContainer>
    </Section>
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
