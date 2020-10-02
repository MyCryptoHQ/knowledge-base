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
import { Yaml } from '../types/category';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    yaml: Yaml;
  };
}

const CategoryContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const Category: FunctionComponent<Props> = ({ data: { yaml } }) => (
  <PageContainer>
    <MetaData title={yaml.title} description={yaml.description} />

    <SubHeader>
      <Breadcrumbs breadcrumbs={yaml.breadcrumbs} />
    </SubHeader>

    <Section>
      <CategoryContainer>
        <Sidebar />
        <CategoryOverview category={yaml} />
      </CategoryContainer>
    </Section>
  </PageContainer>
);

export const query = graphql`
  query Category($slug: String!) {
    yaml(slug: { eq: $slug }) {
      title
      slug
      description
      categories {
        title
        slug
        description
        pages {
          slug
        }
        categories {
          slug
        }
      }
      pages {
        slug
        frontmatter {
          title
        }
        excerpt(pruneLength: 500)
      }
      breadcrumbs {
        title
        slug
      }
    }
  }
`;

export default Category;
