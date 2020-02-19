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
import PageFooter from '../components/PageFooter/PageFooter';
import PageHeader from '../components/PageHeader/PageHeader';
import PageBody from '../components/PageBody';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    page: PageData;
  };
}

const Page: FunctionComponent<Props> = ({ data: { page } }) => (
  <PageContainer>
    <MetaData title={page.title} description={page.description} />

    <Header />
    <SubHeader>
      <Breadcrumbs parent={page.parent} />
    </SubHeader>

    <Section>
      <Container>
        <article>
          <PageHeader title={page.title} dateModified={page.dateModified} />
          <PageBody body={page.childMdx.body} />
        </article>
      </Container>
    </Section>

    <PageFooter slug={page.slug} />
  </PageContainer>
);

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
