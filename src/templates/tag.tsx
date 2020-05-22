import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaData from '../components/MetaData';
import PageItem from '../components/PageItem';
import Sidebar from '../components/Sidebar';
import TagOverview from '../components/TagOverview';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import PageContainer from '../components/ui/PageContainer';
import Section from '../components/ui/Section';
import SubHeader from '../components/ui/SubHeader';
import { Page as PageData } from '../models/page';

interface Props {
  pathContext: {
    tagName: string;
  };
  data: {
    allPage: {
      edges: {
        node: Pick<PageData, 'title' | 'slug' | 'childMdx'>;
      }[];
    };
  };
}

const TagContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const Tag: FunctionComponent<Props> = ({ data: { allPage }, pathContext: { tagName } }) => (
  <PageContainer>
    <MetaData title={tagName} />

    <SubHeader>
      <Breadcrumbs />
    </SubHeader>

    <Section>
      <TagContainer>
        <Sidebar />
        <TagOverview tagName={tagName} pages={allPage.edges.map(edge => edge.node)} />
      </TagContainer>
    </Section>
  </PageContainer>
);

export default Tag;

export const query = graphql`
  query Tag($tag: [String]!) {
    allPage(filter: { tags: { in: $tag } }) {
      edges {
        node {
          title
          slug
          childMdx {
            excerpt
          }
        }
      }
    }
  }
`;
