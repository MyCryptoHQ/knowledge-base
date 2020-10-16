import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import FeaturedCategories from '../components/FeaturedCategories';
import Hero from '../components/Header/Hero';
import PopularArticles from '../components/PopularArticles';
import Search from '../components/Search';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import PageContainer from '../components/ui/PageContainer';
import breakpoint from '../theme/breakpoints';
import { Mdx } from '../types/page';

const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: row;

  ${breakpoint('lg', 'max')`
    flex-direction: column;
  `};
`;

interface Props {
  data: {
    allMdx: {
      nodes: Mdx[];
    };
  };
}

const Index: FunctionComponent<Props> = ({ data }) => (
  <PageContainer>
    <Hero>
      <Heading as="h2">How can we help you?</Heading>
      <Search compact={false} maxWidth={'50rem'} />
    </Hero>
    <HomeContainer>
      <FeaturedCategories />
      <PopularArticles articles={data.allMdx.nodes} />
    </HomeContainer>
  </PageContainer>
);

export default Index;

export const query = graphql`
  query Index($popularArticles: [String!]!) {
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
