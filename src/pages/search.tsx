import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaData from '../components/MetaData';
import SearchPage from '../components/SearchPage';
import Container from '../components/ui/Container';
import PageContainer from '../components/ui/PageContainer';
import Section from '../components/ui/Section';
import SubHeader from '../components/ui/SubHeader';
import { Page } from '../models/page';

interface Props {
  data: {
    allPage: {
      edges: Array<{
        node: Page;
      }>;
    };
  };
}

const Search: FunctionComponent<Props> = ({ data }) => (
  <PageContainer>
    <MetaData title="Search" noIndex={true} />

    <SubHeader>
      <Breadcrumbs parent={{ title: 'Search', slug: 'search' }} />
    </SubHeader>

    <Section>
      <Container>
        <SearchPage allPages={data.allPage.edges.map(edge => edge.node)} />
      </Container>
    </Section>
  </PageContainer>
);

export default Search;

export const query = graphql`
  query SearchPage {
    allPage {
      edges {
        node {
          title
          description
          tags
          slug
          childMdx {
            excerpt(pruneLength: 500)
          }
        }
      }
    }
  }
`;
