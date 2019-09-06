import React, { FunctionComponent, useEffect, useState } from 'react';
import { Category } from '../../../models/category';
import FeaturedCategoryItem from './FeaturedCategoryItem';

interface Props {
  category: string;
  categories: Category[];
}

const FeaturedCategory: FunctionComponent<Props> = ({ category, categories }) => {
  const [categoryItem, setCategoryItem] = useState<Category>();

  useEffect(
    () => {
      setCategoryItem(categories.find(item => item.slug === category));
    },
    [category]
  );

  if (categoryItem) {
    return <FeaturedCategoryItem category={categoryItem} />;
  }

  return null;
};

export default FeaturedCategory;
