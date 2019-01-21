import * as React from 'react';
import Link from 'gatsby-link';
import { Category } from '../../models/category';
import CategoryItemCount from '../CategoryItem/CategoryItemCount/CategoryItemCount';

interface Props {
  category: Category;
}

const SubCategoryItem: React.StatelessComponent<Props> = ({ category }) => (
  <div className="category-page">
    <Link to={`/${category.slug}`}>
      <div className="row">
        <div className="category-page-description col-xs col-no-gutter">
          <h3>{category.title}</h3>
          {/*{category.description}*/}
          <CategoryItemCount category={category} />
        </div>
      </div>
    </Link>
  </div>
);

export default SubCategoryItem;
