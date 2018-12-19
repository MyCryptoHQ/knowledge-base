import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Page } from '../../models/page';
import PageItem from '../PageItem/PageItem';

interface Props {
  slug: string;
}

interface QueryData {
  allPage: {
    edges: {
      node: Page;
    }[];
  };
}

const PageSelector: React.StatelessComponent<Props> = ({ slug }) => (
  <StaticQuery
    query={graphql`
      query {
        allPage {
          edges {
            node {
              slug
              title
              description
            }
          }
        }
      }
    `}
    render={({ allPage: { edges } }: QueryData) => {
      const page = edges.find(edge => edge.node.slug === slug);

      if (page) {
        return <PageItem page={page.node} />;
      }

      return null;
    }}
  />
);

export default PageSelector;
