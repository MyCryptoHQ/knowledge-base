import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Category } from '../../models/category';
import breakpoint from '../../theme/breakpoints';
import CategoryItem from '../CategoryItem';
import PageItem from '../PageItem';
import Heading from '../ui/Heading';

const CategoryWrapper = styled.section`
  flex: 1;
  margin-left: 3.22rem;

  ${breakpoint('lg', 'max')`
    margin: 0;
  `};
`;

const OverviewHeading = styled(Heading)`
  color: ${({ theme }) => theme.primary};
`;

const SubCategories = styled.div`
  margin-bottom: 5rem;
`;

interface Props {
  category: Category;
}

const CategoryOverview: FunctionComponent<Props> = ({ category }) => (
  <CategoryWrapper>
    <OverviewHeading as="h2">{category.title}</OverviewHeading>
    {category.childrenCategory && category.childrenCategory.length > 0 && (
      <SubCategories>
        {category.childrenCategory.map(subCategory => (
          <CategoryItem key={subCategory.slug} category={subCategory} />
        ))}
      </SubCategories>
    )}

    {category.childrenPage &&
      category.childrenPage.map(page => <PageItem key={page.slug} page={page} showReadMore={true} />)}
  </CategoryWrapper>
);

export default CategoryOverview;
