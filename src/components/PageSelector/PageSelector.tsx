import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Mdx } from '../../types/page';
import PageItem from '../PageItem';

interface Props {
  slug: string;
  titleOnly?: boolean;
}

interface QueryData {
  allMdx: {
    nodes: Mdx[];
  };
}

const PageSelector: FunctionComponent<Props> = ({ slug, titleOnly }) => {
  const { allMdx } = useStaticQuery<QueryData>(
    graphql`
      query {
        allMdx {
          nodes {
            slug
            excerpt
            frontmatter {
              title
            }
          }
        }
      }
    `
  );

  const page = allMdx.nodes.find(page => page.slug === slug);
  if (page) {
    return <PageItem page={page} titleOnly={titleOnly} />;
  }

  return null;
};

export default PageSelector;
