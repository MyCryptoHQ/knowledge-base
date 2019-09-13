import React, { FunctionComponent, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Page } from '../../models/page';
import PageItem from '../PageItem';

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

const PageSelector: FunctionComponent<Props> = ({ slug }) => {
  const { allPage } = useStaticQuery<QueryData>(
    graphql`
      query {
        allPage {
          edges {
            node {
              slug
              title
              childMdx {
                excerpt
              }
            }
          }
        }
      }
    `
  );
  const [page, setPage] = useState<Page>();

  useEffect(
    () => {
      const item = allPage.edges.find(edge => edge.node.slug === slug);
      if (item) {
        setPage(item.node);
      }
    },
    [allPage.edges]
  );

  if (page) {
    return <PageItem page={page} />;
  }

  return null;
};

export default PageSelector;
