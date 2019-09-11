import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/ui/PageContainer';
import Header from '../components/ui/Header';
import SubHeader from '../components/ui/SubHeader';
import { Category as CategoryData } from '../models/category';
import Breadcrumbs from '../components/Breadcrumbs';
import PageItem from '../components/PageItem';
import CategoryItem from '../components/CategoryItem';
import MetaData from '../components/MetaData';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import ThematicBreak from '../components/ui/ThematicBreak';

interface Props {
  pathContext: {
    slug: string;
  };
  data: {
    category: CategoryData;
  };
}

const Category: FunctionComponent<Props> = ({ data: { category } }) => (
  <PageContainer>
    <MetaData title={category.title} description={category.description} />

    <Header />
    <SubHeader>
      <Breadcrumbs parent={category.parent} />
    </SubHeader>

    <Section>
      <Container>
        <Heading as="h2">{category.title}</Heading>
        {category.childrenCategory &&
          category.childrenCategory.length > 0 && (
            <>
              {category.childrenCategory.map(subCategory => (
                <CategoryItem key={subCategory.slug} category={subCategory} />
              ))}
              {category.childrenPage && <ThematicBreak />}
            </>
          )}
        {category.childrenPage &&
          category.childrenPage.map(page => <PageItem key={page.slug} page={page} />)}
      </Container>
    </Section>
  </PageContainer>
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
