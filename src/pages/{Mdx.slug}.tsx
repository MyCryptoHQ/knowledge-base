import { t, Trans } from '@lingui/macro';
import { Body, Box, Breadcrumb, Breadcrumbs, Container, Flex, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Article, Articles, Label, Link, Markdown, Page as PageContainer, Sidebar } from '../components';
import { Mdx } from '../types';

interface Props {
  data: {
    mdx: Mdx;
  };
}

const Page: FunctionComponent<Props> = ({ data: { mdx } }) => (
  <PageContainer title={mdx.frontmatter.title} description={mdx.excerpt} keyWords={mdx.frontmatter.tags}>
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

        <Flex marginTop="48px" flexDirection={['column', null, 'row']}>
          <Box paddingRight="4" flex={1}>
            <SubHeading fontSize="45px" lineHeight="54px" marginBottom="20px" color="text.primary">
              {mdx.frontmatter.title}
            </SubHeading>
            <Flex marginBottom="5" flexDirection={['column', 'row']}>
              <SubHeading
                as="h3"
                fontSize="24px"
                fontWeight="400"
                lineHeight="29px"
                color="text.accent"
                marginRight="3">
                <Trans>Last updated: {mdx.frontmatter.dateModified}</Trans>
              </SubHeading>
              <Box marginTop={['10px', '0']}>
                <Label category={mdx.category} />
              </Box>
            </Flex>
            <Markdown body={mdx.body} />
          </Box>

          <Sidebar page={mdx} />
        </Flex>

        {mdx.relatedArticles && (
          <Box marginBottom="4">
            <Articles title={t`Related Articles`}>
              {mdx.relatedArticles.map((relatedArticle) => (
                <Article key={relatedArticle.slug} article={relatedArticle} />
              ))}
            </Articles>
          </Box>
        )}

        <Body fontSize="20px" lineHeight="24px" marginBottom="6">
          <Trans>
            Didn't find what you were looking for?{' '}
            <Link to="mailto:support@mycrypto.com" external={true}>
              Contact Us
            </Link>
          </Trans>
        </Body>
      </Container>
    </Box>
  </PageContainer>
);

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      slug
      excerpt(pruneLength: 155)
      frontmatter {
        title
        tags
        dateModified: date_modified(formatString: "MMMM Do, YYYY")
      }
      category {
        parentCategory {
          title
          badge
          slug
        }
      }
      breadcrumbs {
        title
        slug
      }
      relatedArticles {
        ...Article
      }
    }
  }
`;
