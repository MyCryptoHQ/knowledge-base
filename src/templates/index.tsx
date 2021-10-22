import { t } from '@lingui/macro';
import { Container } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Article, Articles, Hero, Page } from '../components';
import { Banner, BannerType } from '../components/Banner';
import { Mdx } from '../types/page';

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
      <Articles title={t`Popular Articles`} marginBottom="5">
        {data.popularArticles.nodes.map((node) => (
          <Article key={`popular-${node.slug}`} article={node} />
        ))}
      </Articles>
      <Banner type={BannerType.Green} marginBottom="5" />
      <Articles title={t`Latest Articles`} columns={2} marginBottom="5">
        {data.latestArticles.nodes.map((node) => (
          <Article key={`latest-${node.slug}`} article={node} />
        ))}
      </Articles>
    </Container>
  </Page>
);

export default Index;

export const query = graphql`
  query Index($popularArticles: [String!]!) {
    popularArticles: allMdx(filter: { slug: { in: $popularArticles } }) {
      nodes {
        slug
        excerpt(pruneLength: 200)
        timeToRead
        category {
          title
          parentCategory {
            slug
          }
        }
        frontmatter {
          title
        }
      }
    }

    latestArticles: allMdx(
      sort: { order: DESC, fields: [frontmatter___date_published] }
      limit: 8
      filter: { category: { parentCategory: { slug: { ne: "troubleshooter" } } } }
    ) {
      nodes {
        slug
        excerpt(pruneLength: 200)
        timeToRead
        category {
          title
          parentCategory {
            slug
          }
        }
        frontmatter {
          title
        }
      }
    }
  }
`;
