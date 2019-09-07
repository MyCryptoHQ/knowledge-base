import React, { FunctionComponent, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import MetaData from '../components/MetaData';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import { formatDate } from '../utils/date';
import * as githubIcon from '../assets/images/icons/social/github.svg';
import { Page as PageData } from '../models/page';
import Breadcrumbs from '../components/Breadcrumbs';
import shortcodes from '../components/markdown';
import Heading from '../components/ui/Heading';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    page: PageData;
  };
}

const Page: FunctionComponent<Props> = ({ data: { page } }) => {
  const [dateModified, setDateModified] = useState<string>();

  useEffect(
    () => {
      setDateModified(formatDate(page.dateModified));
    },
    [page.dateModified]
  );

  return (
    <div className="full-width">
      <MetaData title={`${page.title} · ${page.parent.title}`} description={page.description} />

      <Header />
      <SubHeader>
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-10 col-gutter-lr">
              <Breadcrumbs parent={page.parent} />
            </div>
          </div>
        </div>
      </SubHeader>

      <div className="container">
        <div className="page row center-xs">
          <div className="col-xs-10 col-gutter-lr">
            <section className="page-content">
              <article>
                <Heading>{page.title}</Heading>
                <div className="page-metadata">Last updated: {dateModified}</div>
                <MDXProvider components={shortcodes}>
                  <div className="page-markdown">
                    <MDXRenderer>{page.childMdx.body}</MDXRenderer>
                  </div>
                </MDXProvider>
              </article>
            </section>
            <section className="page-extra">
              <a
                href={`https://github.com/MyCryptoHQ/knowledge-base-content/blob/master/${
                  page.slug
                }.md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="Github icon" /> Improve this article
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

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
