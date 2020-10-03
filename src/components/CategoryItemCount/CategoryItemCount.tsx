import React, { FunctionComponent } from 'react';
import { Yaml } from '../../types/category';
import Text from '../ui/Text';

interface Props {
  category: Yaml;
}

const CategoryItemCount: FunctionComponent<Props> = ({ category }) => (
  <Text muted={true} noMargin={true} small={true}>
    {category.pages && category.pages.length > 0 && (
      <>
        {category.pages.length} article
        {category.pages.length !== 1 && 's'}
      </>
    )}

    {category.categories && category.categories.length > 0 && (
      <>
        {category.pages && category.pages.length > 0 && ', '}
        {category.categories.length} {(category.categories.length === 1 && 'category') || 'categories'}
      </>
    )}
  </Text>
);

export default CategoryItemCount;
