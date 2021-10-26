import { t, Trans } from '@lingui/macro';
import { Box, Container } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Article, Articles, Hero, Link, Page } from '../components';
import { Banner, BannerType } from '../components/Banner';
import { Mdx } from '../types';

export interface IndexProps {
  data: {
    popularArticles: {
      nodes: Mdx[];
    };
    latestArticles: {
      nodes: Mdx[];
    };
  };
}

const Index: FunctionComponent<IndexProps> = ({ data }) => (
  <Page>
    <Container>
      <Hero />
      <Articles title={t`Popular Articles`} marginBottom="4">
        {data.popularArticles.nodes.map((node) => (
          <Article key={`popular-${node.slug}`} article={node} />
        ))}
      </Articles>
      <Box fontSize="18px" fontWeight="bold" textAlign="center" marginBottom="5">
        <Link to="/articles/popular">
          <Trans>Show More</Trans>
        </Link>
      </Box>
      <Banner type={BannerType.Green} marginBottom="5" />
      <Articles title={t`Latest Articles`} columns={2} marginBottom="4">
        {data.latestArticles.nodes.map((node) => (
          <Article key={`latest-${node.slug}`} article={node} />
        ))}
      </Articles>
      <Box fontSize="18px" fontWeight="bold" textAlign="center" marginBottom="5">
        <Link to="/articles/latest">
          <Trans>Show More</Trans>
        </Link>
      </Box>
    </Container>
  </Page>
);

export default Index;

export const query = graphql`
  query Index($popularArticles: [String!]!) {
    popularArticles: allMdx(
      filter: { slug: { in: $popularArticles } }
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date_modified] }
    ) {
      nodes {
        ...Article
      }
    }

    latestArticles: allMdx(
      sort: { order: DESC, fields: [frontmatter___date_published] }
      limit: 8
      filter: { category: { parentCategory: { slug: { ne: "troubleshooter" } } } }
    ) {
      nodes {
        ...Article
      }
    }
  }
`;
