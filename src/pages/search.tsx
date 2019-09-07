import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import MetaData from '../components/MetaData';
import SearchPage from '../components/Search/SearchPage';
import { Page } from '../models/page';
import Breadcrumbs from '../components/Breadcrumbs';

interface Props {
  data: {
    allPage: {
      edges: {
        node: Page;
      }[];
    };
  };
}

const Search: FunctionComponent<Props> = ({ data }) => (
  <div className="full-width">
    <MetaData title="Search" noIndex={true} />

    <Header />
    <SubHeader>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-10 col-gutter-lr">
            <Breadcrumbs parent={{ title: 'Search', slug: 'search' }} />
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
);

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
