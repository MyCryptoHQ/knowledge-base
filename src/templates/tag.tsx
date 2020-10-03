import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaData from '../components/MetaData';
import Sidebar from '../components/Sidebar';
import TagOverview from '../components/TagOverview';
import Container from '../components/ui/Container';
import PageContainer from '../components/ui/PageContainer';
import Section from '../components/ui/Section';
import SubHeader from '../components/ui/SubHeader';
import { Mdx } from '../types/page';

interface Props {
  pathContext: {
    tagName: string;
  };
  data: {
    allMdx: {
      nodes: Mdx[];
    };
    articles: {
      nodes: Mdx[];
    };
  };
}

const TagContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const Tag: FunctionComponent<Props> = ({ data: { allMdx, articles }, pathContext: { tagName } }) => (
  <PageContainer>
    <MetaData title={tagName} />

    <SubHeader>
      <Breadcrumbs
        breadcrumbs={[{ title: `Tag: ${tagName}`, slug: `tag/${tagName.toLowerCase().replace(/\\s/g, '-')}` }]}
      />
    </SubHeader>

    <Section>
      <TagContainer>
        <Sidebar articles={articles.nodes} />
        <TagOverview tagName={tagName} pages={allMdx.nodes} />
      </TagContainer>
    </Section>
  </PageContainer>
);

export default Tag;

export const query = graphql`
  query Tag($tag: [String]!) {
    allMdx(filter: { frontmatter: { tags: { in: $tag } } }) {
      nodes {
        slug
        excerpt
        frontmatter {
          title
        }
      }
    }

    articles: allMdx(filter: { slug: { in: $popularArticles } }) {
      nodes {
        slug
        excerpt
        frontmatter {
          title
        }
      }
    }
  }
`;
