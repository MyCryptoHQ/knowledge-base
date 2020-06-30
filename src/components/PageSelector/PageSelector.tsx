import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Page } from '../../models/page';
import PageItem from '../PageItem';

interface Props {
  slug: string;
  titleOnly?: boolean;
}

interface QueryData {
  allPage: {
    edges: Array<{
      node: Page;
    }>;
  };
}

const PageSelector: FunctionComponent<Props> = ({ slug, titleOnly }) => {
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

  const page = allPage.edges.find(edge => edge.node.slug === slug);
  if (page) {
    return <PageItem page={page.node} titleOnly={titleOnly} />;
  }

  return null;
};

export default PageSelector;
