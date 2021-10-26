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

const Latest: FunctionComponent<LatestArticlesProps> = ({ data }) => (
  <Page title={t`Latest Articles`}>
    <Container flex="1">
      <Breadcrumbs paddingY="48px">
        <Breadcrumb>
          <Link to="/">
            <Trans>Homepage</Trans>
          </Link>
        </Breadcrumb>
        <Breadcrumb>
          <Trans>Latest Articles</Trans>
        </Breadcrumb>
      </Breadcrumbs>

      <Articles title={t`All Latest Articles`} marginBottom="5">
        {data.allMdx.nodes.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </Articles>
    </Container>
  </Page>
);

export default Latest;

export const query = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date_published] }
      limit: 30
      filter: { category: { parentCategory: { slug: { ne: "troubleshooter" } } } }
    ) {
      nodes {
        ...Article
      }
    }
  }
`;
