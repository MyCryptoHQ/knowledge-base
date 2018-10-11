import * as React from 'react';
import MetaData from '../components/MetaData/MetaData';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import { formatDate } from '../utils/date';
import * as githubIcon from '../assets/images/icons/social/github.svg';
import { Page as PageData } from '../models/page';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { setSearching } from '../store/search/actions';
import { navigate } from '@reach/router';

interface OwnProps {
  pathContext: {
    slug: string;
  };
  data: {
    page: PageData;
    file: {
      childMarkdownRemark: {
        html: string;
      };
    };
  };
}

interface StateProps {
  isSearching: boolean;
}

interface DispatchProps {
  setSearch(searching: boolean): void;
}

interface State {
  datePublished: string;
  dateModified: string;
  showSearchButton: boolean;
}

type Props = OwnProps & StateProps & DispatchProps;

class Page extends React.PureComponent<Props, State> {
  state = {
    datePublished: this.props.data.page.datePublished,
    dateModified: this.props.data.page.dateModified,
    showSearchButton: false
  };

  constructor(props: Props) {
    super(props);

    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
  }

  componentDidMount() {
    this.setState({
      datePublished: formatDate(this.state.datePublished),
      dateModified: formatDate(this.state.dateModified)
    });
  }

  componentWillMount() {
    const { isSearching, setSearch } = this.props;
    if (isSearching) {
      this.setState({ showSearchButton: true });
      setSearch(false);
    }
  }

  render() {
    const {
      data: { page, file }
    } = this.props;
    const { dateModified, showSearchButton } = this.state;

    return (
      <Layout>
        <div className="full-width">
          <MetaData title={`${page.title} · ${page.parent.title}`} description={page.description} />

          <Header />
          <SubHeader>
            <div className="container">
              <div className="row center-xs">
                <div className="col-xs-10 col-gutter-lr">
                  <Breadcrumbs breadcrumbs={page.breadcrumbs} />
                </div>
              </div>
            </div>
          </SubHeader>

          <div className="container">
            <div className="page row center-xs">
              <div className="col-xs-10 col-gutter-lr">
                <section className="page-content">
                  {showSearchButton && (
                    <div className="back">
                      <a href="#" onClick={this.handleClickSearchButton}>
                        Back to search results
                      </a>
                    </div>
                  )}
                  <article>
                    <h1>{page.title}</h1>
                    <div className="page-metadata">Last updated: {dateModified}</div>
                    <div
                      className="page-markdown"
                      dangerouslySetInnerHTML={{ __html: file.childMarkdownRemark.html || '' }}
                    />
                  </article>
                </section>
                <section className="page-extra">
                  <a
                    href={`https://github.com/MyCryptoHQ/knowledge-base/blob/master/src/content/${
                      page.originalSlug
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
      </Layout>
    );
  }

  private handleClickSearchButton() {
    const { setSearch } = this.props;
    setSearch(true);
    navigate('/search');
  }
}

export const query = graphql`
  fragment CategoryData on Category {
    title
  }

  query Page($slug: String!, $file: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      originalSlug
      description
      datePublished
      dateModified
      parent {
        ...CategoryData
      }
      breadcrumbs {
        title
        slug
      }
    }
    file(relativePath: { eq: $file }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;

const mapStateToProps = (state: ApplicationState) => ({ isSearching: state.search.isSearching });

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setSearch: (searching: boolean) => dispatch(setSearching(searching))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
