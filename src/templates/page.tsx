import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaData from '../components/MetaData';
import PageBody from '../components/PageBody';
import PageFooter from '../components/PageFooter/PageFooter';
import PageHeader from '../components/PageHeader/PageHeader';
import Container from '../components/ui/Container';
import PageContainer from '../components/ui/PageContainer';
import Section from '../components/ui/Section';
import SubHeader from '../components/ui/SubHeader';
import { Mdx } from '../types/page';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    mdx: Pick<Mdx, 'body' | 'slug' | 'frontmatter'>;
  };
}

const Article = styled.article`
  word-break: break-word;
`;

const Page: FunctionComponent<Props> = ({ data: { mdx } }) => (
  <PageContainer>
    <MetaData title={mdx.frontmatter.title} keyWords={mdx.frontmatter.tags} />

    <SubHeader>
      {/* TODO */}
      <Breadcrumbs />
    </SubHeader>

    <Section>
      <Container maxWidth="74rem">
        <Article>
          <PageHeader
            title={mdx.frontmatter.title}
            tags={mdx.frontmatter.tags}
            dateModified={mdx.frontmatter.dateModified}
          />
          <PageBody body={mdx.body} />
        </Article>
      </Container>
    </Section>

    <PageFooter slug={mdx.slug} />
  </PageContainer>
);

export default Page;

// TODO: Category parent
export const query = graphql`
  query Page($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      slug
      frontmatter {
        title
        tags
        dateModified
      }
    }
  }
`;
