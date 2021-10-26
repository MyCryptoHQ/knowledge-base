import { t, Trans } from '@lingui/macro';
import { Breadcrumb, Breadcrumbs, Container } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Article, Articles, Link, Page } from '../../components';
import { Mdx } from '../../types';

export interface LatestArticlesProps {
  data: {
    allMdx: {
      nodes: Mdx[];
    };
  };
}

const Popular: FunctionComponent<LatestArticlesProps> = ({ data }) => (
  <Page title={t`Popular Articles`}>
    <Container flex="1">
      <Breadcrumbs paddingY="48px">
        <Breadcrumb>
          <Link to="/">
            <Trans>Homepage</Trans>
          </Link>
        </Breadcrumb>
        <Breadcrumb>
          <Trans>Popular Articles</Trans>
        </Breadcrumb>
      </Breadcrumbs>

      <Articles title={t`All Popular Articles`} marginBottom="5">
        {data.allMdx.nodes.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </Articles>
    </Container>
  </Page>
);

export default Popular;

export const query = graphql`
  query Popular($popularArticles: [String!]!) {
    allMdx(filter: { slug: { in: $popularArticles } }, sort: { order: DESC, fields: [frontmatter___date_modified] }) {
      nodes {
        ...Article
      }
    }
  }
`;
