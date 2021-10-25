import { Tag } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Yaml } from '../types';
import { getCategoryTag } from '../utils';

export interface LabelProps {
  category: Yaml;
}

export const Label: FunctionComponent<LabelProps> = ({ category }) => (
  <Tag type={getCategoryTag(category)} marginBottom="0">
    {category.parentCategory.title}
  </Tag>
);
