import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Category } from '../../models/category';
import CategoryItemCount from '../CategoryItemCount';
import Link from '../Link';
import Heading from '../ui/Heading';

interface Props {
  category: Category;
}

const CategoryHeading = styled(Heading)`
  font-size: 2rem;
  vertical-align: middle;
  margin-right: 1.5rem;
  margin-bottom: 0;
`;

const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3.6rem;
`;

const CategoryItem: FunctionComponent<Props> = ({ category }) => (
  <>
    <Link to={`/${category.slug}`}>
      <CategoryItemWrapper>
        <CategoryHeading as="h3">{category.title}</CategoryHeading>
        <CategoryItemCount category={category} />
      </CategoryItemWrapper>
    </Link>
  </>
);

export default CategoryItem;
