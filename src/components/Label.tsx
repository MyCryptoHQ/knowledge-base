import { Tag } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Yaml } from '../types';
import { getCategoryTag } from '../utils';
import { Link } from './Link';

export interface LabelProps {
  category: Yaml;
}

export const Label: FunctionComponent<LabelProps> = ({ category }) => (
  <Link to={`/${category.parentCategory.slug}`}>
    <Tag type={getCategoryTag(category)} marginBottom="0">
      {category.parentCategory.title}
    </Tag>
  </Link>
);
