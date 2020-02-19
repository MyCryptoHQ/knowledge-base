import React, { FunctionComponent } from 'react';
import { Category } from '../../models/category';
import Text from '../ui/Text';

interface Props {
  category: Category;
}

const CategoryItemCount: FunctionComponent<Props> = ({ category }) => (
  <Text muted={true} noMargin={true} small={true}>
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
  </Text>
);

export default CategoryItemCount;
