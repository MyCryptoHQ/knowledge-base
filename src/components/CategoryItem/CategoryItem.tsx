import React, { FunctionComponent } from 'react';
import Link from 'gatsby-link';
import { Category } from '../../models/category';
import CategoryItemCount from './CategoryItemCount';

interface Props {
  category: Category;
}

const CategoryItem: FunctionComponent<Props> = ({ category }) => (
  <div className="category-item">
    <Link to={`/${category.slug}`}>
      <div className="row">
        <div className="category-description col-xs col-no-gutter">
          <h3>{category.title}</h3>
          <p>{category.description}</p>
          <CategoryItemCount category={category} />
        </div>
      </div>
    </Link>
  </div>
);

export default CategoryItem;
