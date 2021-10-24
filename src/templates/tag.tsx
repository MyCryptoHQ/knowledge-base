import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Page, Section } from '../components';
import TagOverview from '../components/TagOverview';
import Container from '../components/ui/Container';
import { Mdx } from '../types';

interface Props {
  pageContext: {
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

const Tag: FunctionComponent<Props> = ({ data: { allMdx }, pageContext: { tagName } }) => (
  <Page title={tagName}>
    <Section>
      <TagContainer>
        <TagOverview tagName={tagName} pages={allMdx.nodes} />
      </TagContainer>
    </Section>
  </Page>
);

export default Tag;

export const query = graphql`
  query Tag($tag: [String]!, $popularArticles: [String!]!) {
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
