import React, { FunctionComponent } from 'react';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import Link from 'gatsby-link';
import MetaData from '../components/MetaData/MetaData';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SearchPage from '../components/Search/SearchPage';
import { Page } from '../models/page';
import ExternalLink from '../components/ExternalLink/ExternalLink';
import Banner from '../components/ui/Banner/Banner';

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
        <Banner>
          <span>
            NEW! Join <ExternalLink to="https://winter.mycrypto.com">#MyCryptoWinter</ExternalLink>{' '}
            to learn the latest support tips and tricks and win prizes! Head over to{' '}
            <ExternalLink to="https://winter.mycrypto.com">winter.mycrypto.com</ExternalLink>.
          </span>
        </Banner>
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
          excerpt
        }
      }
    }
  }
`;
