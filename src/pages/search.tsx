import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/ui/PageContainer';
import Header from '../components/ui/Header';
import SubHeader from '../components/ui/SubHeader';
import MetaData from '../components/MetaData';
import SearchPage from '../components/SearchPage';
import { Page } from '../models/page';
import Breadcrumbs from '../components/Breadcrumbs';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';

interface Props {
  data: {
    allPage: {
      edges: {
        node: Page;
      }[];
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
          slug
          childMdx {
            excerpt
          }
        }
      }
    }
  }
`;
