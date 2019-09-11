import React, { FunctionComponent, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import PageContainer from '../components/ui/PageContainer';
import MetaData from '../components/MetaData';
import Header from '../components/ui/Header';
import SubHeader from '../components/ui/SubHeader';
import { formatDate } from '../utils/date';
import * as githubIcon from '../assets/images/icons/social/github.svg';
import { Page as PageData } from '../models/page';
import Breadcrumbs from '../components/Breadcrumbs';
import shortcodes from '../components/markdown';
import Heading from '../components/ui/Heading';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import PageFooter from '../components/PageFooter/PageFooter';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    page: PageData;
  };
}

const Page: FunctionComponent<Props> = ({ data: { page } }) => {
  const [dateModified, setDateModified] = useState<string>();

  useEffect(
    () => {
      setDateModified(formatDate(page.dateModified));
    },
    [page.dateModified]
  );

  return (
    <PageContainer>
      <MetaData title={`${page.title} · ${page.parent.title}`} description={page.description} />

      <Header />
      <SubHeader>
        <Breadcrumbs parent={page.parent} />
      </SubHeader>

      <Section>
        <Container>
          <article>
            <Heading>{page.title}</Heading>
            <div className="page-metadata">Last updated: {dateModified}</div>
            <MDXProvider components={shortcodes}>
              <div className="page-markdown">
                <MDXRenderer>{page.childMdx.body}</MDXRenderer>
              </div>
            </MDXProvider>
          </article>
        </Container>
      </Section>

      <PageFooter slug={page.slug} />
    </PageContainer>
  );
};

export default Page;

export const query = graphql`
  query Page($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      description
      dateModified
      childMdx {
        body
      }
      parent {
        ... on Category {
          title
          slug
        }
      }
    }
  }
`;
