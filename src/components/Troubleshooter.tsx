import { Trans } from '@lingui/macro';
import { Box, Breadcrumb, Breadcrumbs, Container, Flex, Image, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Mdx, Yaml } from '../types';
import Card from './Card';
import { Link } from './Link';
import { Markdown } from './Markdown';
import { Page } from './Page';
import { Section } from './Section';

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

// TODO: Remove `noIndex`
const TroubleshooterPage: FunctionComponent<Props> = ({ data: { yaml } }) => (
  <Page title={yaml.title} description={yaml.extendedDescription?.excerpt ?? yaml.description} noIndex={true}>
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
        <SubHeading fontSize="large" lineHeight="120%" marginBottom="3">
          {yaml.title}
        </SubHeading>
      </Flex>
    </Section>

    <Container flex="1" maxWidth="600px">
      {yaml.extendedDescription && <Markdown body={yaml.extendedDescription.body} />}
      {yaml.categories && (
        <>
          {yaml.categories.map((subCategory) => (
            <Card key={subCategory.slug} marginBottom="3">
              <Link to={`/${subCategory.slug}`}>
                <SubHeading fontSize="medium" lineHeight="29px" marginBottom="12px">
                  {subCategory.title}
                </SubHeading>
              </Link>
            </Card>
          ))}
        </>
      )}
    </Container>
  </Page>
);

export default TroubleshooterPage;

export const query = graphql`
  query TroubleshooterQuery($slug: String!) {
    yaml(slug: { eq: $slug }) {
      title
      slug
      extendedDescription {
        body
        excerpt
      }
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
  }
`;
