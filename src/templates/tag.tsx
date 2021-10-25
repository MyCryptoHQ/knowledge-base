import { Container } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Page } from '../components';
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

const Tag: FunctionComponent<Props> = ({ pageContext: { tagName } }) => (
  <Page title={tagName}>
    <Container>{/* TODO */}</Container>
  </Page>
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
  }
`;
