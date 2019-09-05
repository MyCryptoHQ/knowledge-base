import React, { FunctionComponent } from 'react';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import Link from 'gatsby-link';
import MetaData from '../components/MetaData/MetaData';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SearchPage from '../components/Search/SearchPage';
import { Page } from '../models/page';

interface Props {
  data: {
    allPage: {
      edges: {
        node: Page;
      }[];
    };
  };
}

const Search: FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <div className="full-width">
        <MetaData title="Search" noIndex={true} />

        <Header />
        <SubHeader>
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-gutter-lr">
                <div className="breadcrumbs">
                  <li>
                    <Link to="/">Knowledge Base</Link>
                  </li>
                  <li>Search</li>
                </div>
              </div>
            </div>
          </div>
        </SubHeader>

        <div className="container">
          <div className="category row center-xs">
            <div className="col-xs-10 col-md-6 col-gutter-lr">
              <SearchPage allPages={data.allPage.edges.map(edge => edge.node)} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

export const query = graphql`
  query SearchPage {
    allPage {
      edges {
        node {
          title
          description
          slug
          childMdx {
            excerpt
          }
        }
      }
    }
  }
`;
