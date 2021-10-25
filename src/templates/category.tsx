import { Plural, t, Trans } from '@lingui/macro';
import { Body, Box, Breadcrumb, Breadcrumbs, Container, Flex, Image, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Article, Articles, Categories, Link, Page, Section } from '../components';
import { Yaml } from '../types';

interface Props {
  pageContext: {
    slug: string;
  };
  data: {
    yaml: Yaml;
  };
}

const Category: FunctionComponent<Props> = ({ data: { yaml } }) => (
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
        <Body variant="muted" fontSize="18px" lineHeight="22px" marginBottom="2" sx={{ textTransform: 'uppercase' }}>
          <Plural value={yaml.pages?.length ?? 0} zero="No articles" one="# article" other="# articles" />
        </Body>
        <SubHeading fontSize="45px" lineHeight="54px" color="text.primary" marginBottom="3">
          {yaml.title}
        </SubHeading>
        <Body fontSize="24px" lineHeight="29px">
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

      {yaml.pages && yaml.pages.length > 0 && (
        <Articles title={t`Browse All Articles`} marginBottom="5">
          {yaml.pages.map((page) => (
            <Article key={page.slug} article={page} />
          ))}
        </Articles>
      )}
    </Container>
  </Page>
);

export default Category;

export const query = graphql`
  query Category($slug: String!) {
    yaml(slug: { eq: $slug }) {
      title
      slug
      description
      parentCategory {
        icon {
          large {
            publicURL
          }
        }
      }
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
  }
`;
