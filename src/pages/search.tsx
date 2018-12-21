import * as React from 'react';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import Link from 'gatsby-link';
import { setSearchIndex } from '../store/search/actions';
import MetaData from '../components/MetaData/MetaData';
import PageItem from '../components/PageItem/PageItem';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';
import { SearchActions } from '../store/search/types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { Dispatch } from 'redux';

interface OwnProps {
  data: {
    searchIndex: {
      index: string;
    };
    allPage: {
      edges: {
        node: {
          title: string;
          slug: string;
          excerpt: string;
        };
      }[];
    };
  };
}

interface StateProps {
  searchQuery: string;
  searchIndex: string;
  searchResults: { ref: string }[];
}

interface DispatchProps {
  setIndex(index: string): void;
}

type Props = OwnProps & StateProps & DispatchProps;

class Search extends React.PureComponent<Props> {
  componentWillMount() {
    const {
      searchIndex,
      setIndex,
      data: {
        searchIndex: { index }
      }
    } = this.props;
    if (!searchIndex) {
      setIndex(index);
    }
  }

  render(): React.ReactNode {
    const {
      searchQuery,
      searchResults,
      data: {
        allPage: { edges }
      }
    } = this.props;

    const pages = searchResults
      .map(result => {
        return edges.find(edge => edge.node.slug === result.ref);
      })
      .map(edge => (edge ? edge.node : { title: '', slug: '', excerpt: '' })); // Temporary workaround for a bug in Gatsby v2

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
                <section>
                  {pages.length > 0 ? (
                    <div>
                      <h2>Results for "{searchQuery}"</h2>
                      {pages.map(page => (
                        <PageItem key={page.slug} page={page} />
                      ))}
                    </div>
                  ) : (
                    <h2>Sorry, there are no results for "{searchQuery}"</h2>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query SearchPage {
    searchIndex {
      index
    }
    allPage {
      edges {
        node {
          title
          slug
          excerpt
        }
      }
    }
  }
`;

const mapStateToProps = (state: ApplicationState) => ({
  searchQuery: state.search.searchQuery,
  searchIndex: state.search.searchIndex,
  searchResults: state.search.searchResults
});

const mapDispatchToProps = (dispatch: Dispatch<SearchActions>) => ({
  setIndex: (index: string) => dispatch(setSearchIndex(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
