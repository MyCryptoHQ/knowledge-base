import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/ui/PageContainer';
import MetaData from '../components/MetaData';
import Header from '../components/ui/Header';
import SubHeader from '../components/ui/SubHeader';
import { Page as PageData } from '../models/page';
import Breadcrumbs from '../components/Breadcrumbs';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Page from '../components/Page';
import PageFooter from '../components/PageFooter/PageFooter';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    page: PageData;
  };
}

const PageTemplate: FunctionComponent<Props> = ({ data: { page } }) => (
  <PageContainer>
    <MetaData title={`${page.title} · ${page.parent.title}`} description={page.description} />

    <Header />
    <SubHeader>
      <Breadcrumbs parent={page.parent} />
    </SubHeader>

    <Section>
      <Container>
        <Page page={page} />
      </Container>
    </Section>

    <PageFooter slug={page.slug} />
  </PageContainer>
);

export default PageTemplate;

export const query = graphql`
  query Page($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      description
      dateModified
      childMdx {
        body
        tableOfContents
      }
      childrenRelatedArticle {
        title
        url
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
