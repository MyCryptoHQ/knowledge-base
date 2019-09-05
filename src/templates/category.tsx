import * as React from 'react';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import { Category as CategoryData } from '../models/category';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import PageItem from '../components/PageItem/PageItem';
import SubCategoryItem from '../components/SubCategoryItem/SubCategoryItem';
import { graphql } from 'gatsby';
import MetaData from '../components/MetaData/MetaData';
import Layout from '../components/Layout/Layout';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    category: CategoryData;
  };
}

const Category: React.StatelessComponent<Props> = ({ data: { category } }) => (
  <Layout>
    <div className="full-width">
      <MetaData title={category.title} description={category.description} />

      <Header />
      <SubHeader>
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-10 col-gutter-lr">
              <Breadcrumbs parent={category.parent} />
            </div>
          </div>
        </div>
      </SubHeader>

      <div className="container">
        <div className="category row center-xs">
          <div className="col-xs-10 col-md-6 col-gutter-lr">
            <section>
              <h2>{category.title}</h2>
              {category.childrenCategory && (
                <>
                  {category.childrenCategory.map(subCategory => (
                    <SubCategoryItem key={subCategory.slug} category={subCategory} />
                  ))}
                  {category.childrenPage && <hr />}
                </>
              )}
              {category.childrenPage &&
                category.childrenPage.map(page => <PageItem key={page.slug} page={page} />)}
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query Category($slug: String!) {
    category(slug: { eq: $slug }) {
      title
      slug
      description
      childrenCategory {
        title
        slug
        description
        childrenPage {
          title
        }
        childrenCategory {
          title
        }
      }
      childrenPage {
        title
        slug
        childMdx {
          excerpt
        }
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

export default Category;
