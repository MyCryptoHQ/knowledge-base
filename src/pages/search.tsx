import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaData from '../components/MetaData';
import SearchPage from '../components/SearchPage';
import Container from '../components/ui/Container';
import PageContainer from '../components/ui/PageContainer';
import Section from '../components/ui/Section';
import SubHeader from '../components/ui/SubHeader';
import { Mdx } from '../types/page';

interface Props {
  data: {
    allMdx: {
      nodes: Mdx[];
    };
  };
}

const Search: FunctionComponent<Props> = ({ data }) => (
  <PageContainer>
    <MetaData title="Search" noIndex={true} />

    <SubHeader>
      <Breadcrumbs breadcrumbs={[{ title: 'Search', slug: 'search' }]} />
    </SubHeader>

    <Section>
      <Container>
        <SearchPage allPages={data.allMdx.nodes} />
      </Container>
    </Section>
  </PageContainer>
);

export default Search;

export const query = graphql`
  query {
    allMdx {
      nodes {
        slug
        excerpt(pruneLength: 500)
        frontmatter {
          title
          description
          tags
        }
      }
    }
  }
`;
