import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Page as PageContainer, Section } from '../components';
import PageArticles from '../components/PageArticles';
import PageBody from '../components/PageBody';
import PageFooter from '../components/PageFooter/PageFooter';
import PageHeader from '../components/PageHeader/PageHeader';
import PageSidebar from '../components/PageSidebar';
import Container from '../components/ui/Container';
import breakpoint from '../theme/breakpoints';
import { Mdx } from '../types/page';

interface Props {
  pageContext: {
    slug: string;
  };
  data: {
    mdx: Mdx;
  };
}

const Article = styled.article`
  word-break: break-word;
  max-width: 74rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${breakpoint('md', 'max')`
    flex-direction: column;
  `};
`;

const Page: FunctionComponent<Props> = ({ data: { mdx } }) => (
  <PageContainer title={mdx.frontmatter.title} keyWords={mdx.frontmatter.tags}>
    <Section>
      <Container maxWidth="120rem">
        <Wrapper>
          <Article>
            <PageHeader
              title={mdx.frontmatter.title}
              tags={mdx.frontmatter.tags}
              dateModified={mdx.frontmatter.dateModified}
            />
            <PageBody body={mdx.body} />
            {mdx.relatedArticles && <PageArticles relatedArticles={mdx.relatedArticles} />}
          </Article>
          <PageSidebar />
        </Wrapper>
      </Container>
    </Section>

    <PageFooter slug={mdx.slug} />
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
