import { CATEGORY_COLOURS } from '../config/categories';
import { Yaml } from '../types/category';

export const encodeTag = (tag: string): string => {
  return tag.toLowerCase().replace(/\s/g, '-');
};

export const getCategoryTag = (category: Yaml) => {
  return CATEGORY_COLOURS[category.parentCategory.slug];
};
