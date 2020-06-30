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
import { Page as PageData } from '../models/page';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    page: PageData;
  };
}

const Article = styled.article`
  word-break: break-word;
`;

const Page: FunctionComponent<Props> = ({ data: { page } }) => (
  <PageContainer>
    <MetaData title={page.title} description={page.description} keyWords={page.tags} />

    <SubHeader>
      <Breadcrumbs parent={page.parent} />
    </SubHeader>

    <Section>
      <Container maxWidth="74rem">
        <Article>
          <PageHeader title={page.title} tags={page.tags} dateModified={page.dateModified} />
          <PageBody body={page.childMdx.body} />
        </Article>
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
      tags
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
