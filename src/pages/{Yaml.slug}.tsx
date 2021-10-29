import { Plural, t, Trans } from '@lingui/macro';
import { Body, Box, Breadcrumb, Breadcrumbs, Container, Flex, Image, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Article, Articles, Categories, Category, Link, Page, Section } from '../components';
import { Mdx, Yaml } from '../types';

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

const CategoryPage: FunctionComponent<Props> = ({ data: { yaml, allMdx } }) => (
  <Page title={yaml.title} description={yaml.description}>
    <Section marginBottom="4">
      <Box marginBottom="4">
        <Breadcrumbs>
          <Breadcrumb>
            <Link to="/">
              <Trans>Homepage</Trans>
            </Link>
          </Breadcrumb>
          {yaml.breadcrumbs.map(({ title, slug }) => (
            <Breadcrumb key={`breadcrumb-${slug}`}>
              <Link to={`/${slug}`}>{title}</Link>
            </Breadcrumb>
          ))}
        </Breadcrumbs>
      </Box>
      <Flex flexDirection="column" alignItems="center" textAlign="center">
        <Image src={yaml.parentCategory.icon?.large.publicURL} alt={yaml.title} maxWidth="170px" marginBottom="3" />
        <Body variant="muted" fontSize="small" lineHeight="22px" marginBottom="2" sx={{ textTransform: 'uppercase' }}>
          <Plural value={yaml.totalArticles} zero="No articles" one="# article" other="# articles" />
        </Body>
        <SubHeading fontSize="large" lineHeight="120%" marginBottom="3">
          {yaml.title}
        </SubHeading>
        <Body fontSize="medium" lineHeight="29px">
          {yaml.description}
        </Body>
      </Flex>
    </Section>

    <Container flex="1">
      <Categories exclude={yaml.slug} marginBottom="5" />

      {yaml.popularArticles && yaml.popularArticles.length > 0 && (
        <Articles title={t`Popular Articles`} columns={2} marginBottom="6">
          {yaml.popularArticles.map((popularArticle) => (
            <Article key={popularArticle.slug} article={popularArticle} />
          ))}
        </Articles>
      )}

      {yaml.list ? (
        <Category category={yaml} />
      ) : (
        <>
          {allMdx.nodes.length > 0 && (
            <Articles title={t`Browse All Articles`} marginBottom="5">
              {allMdx.nodes.map((page) => (
                <Article key={page.slug} article={page} />
              ))}
            </Articles>
          )}
        </>
      )}
    </Container>
  </Page>
);

export default CategoryPage;

export const query = graphql`
  fragment SubCategory on Yaml {
    title
    slug
    description
    pages {
      ...Article
    }
    categories {
      title
      slug
      description
      pages {
        ...Article
      }
      categories {
        slug
      }
    }
  }

  query CategoryQuery($slug: String!, $glob: String!) {
    yaml(slug: { eq: $slug }) {
      title
      slug
      description
      list
      totalArticles
      parentCategory {
        icon {
          large {
            publicURL
          }
        }
      }
      categories {
        ...SubCategory
      }
      pages {
        ...Article
      }
      breadcrumbs {
        title
        slug
      }
      popularArticles {
        ...Article
      }
    }

    allMdx(filter: { slug: { glob: $glob } }, sort: { fields: [frontmatter___date_modified], order: DESC }) {
      nodes {
        ...Article
      }
    }
  }
`;
