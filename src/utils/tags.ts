import { CATEGORY_COLOURS } from '../config';
import { Yaml } from '../types';

export const getCategoryTag = (category: Yaml) => {
  return CATEGORY_COLOURS[category.parentCategory.slug];
};
