import { Plural, Trans } from '@lingui/macro';
import { Body, Box, Breadcrumb, Breadcrumbs, Container, Flex, Image, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Categories, Link, Page, Section } from '../components';
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

const Category: FunctionComponent<Props> = ({ data: { yaml, allMdx } }) => (
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
          <Plural value={allMdx.nodes.length} zero="No articles" one="# article" other="# articles" />
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
    </Container>
  </Page>
);

export default Category;

export const query = graphql`
  query Category($slug: String!, $popularArticles: [String!]!) {
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
        slug
        frontmatter {
          title
        }
        excerpt(pruneLength: 500)
      }
      breadcrumbs {
        title
        slug
      }
    }

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
