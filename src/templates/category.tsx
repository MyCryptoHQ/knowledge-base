import * as React from 'react';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import { Category as CategoryData } from '../models/category';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import PageItem from '../components/PageItem/PageItem';
import SubCategoryItem from '../components/SubCategoryItem/SubCategoryItem';
import { graphql } from 'gatsby';
import { Page } from '../models/page';
import MetaData from '../components/MetaData/MetaData';
import Layout from '../components/Layout/Layout';
import ExternalLink from '../components/ExternalLink/ExternalLink';
import Banner from '../components/ui/Banner/Banner';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    category: CategoryData;
    allCategory: {
      edges: {
        node: CategoryData;
      }[];
    };
    allPage: {
      edges: {
        node: Page;
      }[];
    };
  };
}

const Category: React.StatelessComponent<Props> = ({
  data: { site, category, allCategory: subCategories, allPage: pages }
}) => (
  <Layout>
    <div className="full-width">
      <MetaData title={category.title} description={category.description} />

      <Header />
      <Banner>
        <span>
          NEW! Join <ExternalLink to="https://winter.mycrypto.com">#MyCryptoWinter</ExternalLink> to
          learn the latest support tips and tricks and win prizes! Head over to{' '}
          <ExternalLink to="https://winter.mycrypto.com">winter.mycrypto.com</ExternalLink>.
        </span>
      </Banner>
      <SubHeader>
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-10 col-gutter-lr">
              <Breadcrumbs breadcrumbs={category.breadcrumbs} />
            </div>
          </div>
        </div>
      </SubHeader>

      <div className="container">
        <div className="category row center-xs">
          <div className="col-xs-10 col-md-6 col-gutter-lr">
            <section>
              <h2>{category.title}</h2>
              {subCategories && (
                <>
                  {subCategories.edges.map(({ node: subCategory }) => (
                    <SubCategoryItem key={subCategory.slug} category={subCategory} />
                  ))}
                  {pages && <hr />}
                </>
              )}
              {pages &&
                pages.edges.map(({ node: page }) => <PageItem key={page.slug} page={page} />)}
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query Category($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    category(slug: { eq: $slug }) {
      title
      slug
      description
      childrenCategory {
        title
        slug
        description
      }
      breadcrumbs {
        title
        slug
      }
    }
    allCategory(filter: { parentSlug: { eq: $slug } }, sort: { fields: [priority], order: DESC }) {
      edges {
        node {
          title
          slug
          description
          childrenPage {
            title
          }
        }
      }
    }
    allPage(filter: { parentSlug: { eq: $slug } }, sort: { fields: [priority], order: DESC }) {
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

export default Category;
