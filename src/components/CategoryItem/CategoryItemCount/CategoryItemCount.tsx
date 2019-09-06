import * as React from 'react';
import { Category } from '../../../models/category';

interface Props {
  category: Category;
}

const CategoryItemCount: React.StatelessComponent<Props> = ({ category }) => {
  return (
    <div className="category-article-count">
      {category.childrenPage &&
        category.childrenPage.length > 0 && (
          <>
            {category.childrenPage.length} article
            {category.childrenPage.length !== 1 && 's'}
          </>
        )}

      {category.childrenCategory &&
        category.childrenCategory.length > 0 && (
          <>
            {category.childrenPage.length > 0 && ', '}
            {category.childrenCategory.length}{' '}
            {(category.childrenCategory.length === 1 && 'category') || 'categories'}
          </>
        )}
    </div>
  );
};

export default CategoryItemCount;
