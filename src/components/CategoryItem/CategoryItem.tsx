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
  margin-bottom: 0;
`;

const CategoryItem: FunctionComponent<Props> = ({ category }) => (
  <div className="category-page">
    <Link to={`/${category.slug}`}>
      <div className="row">
        <div className="category-page-description col-xs col-no-gutter">
          <CategoryHeading as="h3">{category.title}</CategoryHeading>
          <CategoryItemCount category={category} />
        </div>
      </div>
    </Link>
  </div>
);

export default CategoryItem;
