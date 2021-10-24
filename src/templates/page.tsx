import { Trans } from '@lingui/macro';
import { Box, Breadcrumb, Breadcrumbs, Container, Flex, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Label, Link, Markdown, Page as PageContainer, Sidebar } from '../components';
import { Mdx } from '../types/page';

interface Props {
  data: {
    mdx: Mdx;
  };
}

const Page: FunctionComponent<Props> = ({ data: { mdx } }) => (
  <PageContainer title={mdx.frontmatter.title} keyWords={mdx.frontmatter.tags}>
    <Box flex="1">
      <Container paddingTop="48px">
        <Breadcrumbs>
          <Breadcrumb>
            <Link to="/">
              <Trans>Homepage</Trans>
            </Link>
          </Breadcrumb>
          {mdx.breadcrumbs.map(({ title, slug }) => (
            <Breadcrumb key={`breadcrumb-${slug}`}>
              <Link to={`/${slug}`}>{title}</Link>
            </Breadcrumb>
          ))}
        </Breadcrumbs>

        <Flex marginTop="48px">
          <Box paddingRight="4" flex={1}>
            <SubHeading fontSize="45px" lineHeight="54px" marginBottom="20px" color="text.primary">
              {mdx.frontmatter.title}
            </SubHeading>
            <Flex marginBottom="5">
              <SubHeading
                as="h3"
                fontSize="24px"
                fontWeight="400"
                lineHeight="29px"
                color="text.accent"
                marginRight="3"
              >
                <Trans>Last updated: {mdx.frontmatter.dateModified}</Trans>
              </SubHeading>
              <Label category={mdx.category} />
            </Flex>
            <Markdown body={mdx.body} />
          </Box>
          <Sidebar />
        </Flex>
      </Container>
    </Box>
  </PageContainer>
);

export default Page;

export const query = graphql`
  query Page($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      slug
      frontmatter {
        title
        tags
        dateModified: date_modified(formatString: "MMMM Do, YYYY")
      }
      category {
        parentCategory {
          title
          slug
        }
      }
      breadcrumbs {
        title
        slug
      }
      relatedArticles {
        title
        url
        isRelative
      }
    }
  }
`;
