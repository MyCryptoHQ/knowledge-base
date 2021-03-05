import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
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
import { Mdx } from '../types/page';

interface Props {
  pageContext: {
    slug: string;
  };
  data: {
    yaml: Yaml;
    allMdx: {
      nodes: Mdx[];
    };
  };
}

const CategoryContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const Category: FunctionComponent<Props> = ({ data: { yaml, allMdx } }) => (
  <PageContainer>
    <MetaData title={yaml.title} description={yaml.description} />

    <SubHeader>
      <Breadcrumbs breadcrumbs={yaml.breadcrumbs} />
    </SubHeader>

    <Section>
      <CategoryContainer>
        <Sidebar articles={allMdx.nodes} />
        <CategoryOverview category={yaml} />
      </CategoryContainer>
    </Section>
  </PageContainer>
);

export default Category;

export const query = graphql`
  query Category($slug: String!, $popularArticles: [String!]!) {
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

    allMdx(filter: { slug: { in: $popularArticles } }) {
      nodes {
        slug
        excerpt
        frontmatter {
          title
        }
      }
    }
  }
`;
