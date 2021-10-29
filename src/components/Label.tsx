import { Tag } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Yaml } from '../types';
import { Link } from './Link';

export interface LabelProps {
  category: Yaml;
}

export const Label: FunctionComponent<LabelProps> = ({ category }) => (
  <Link to={`/${category.parentCategory.slug}`}>
    <Tag type={category.parentCategory.badge} marginBottom="0">
      {category.parentCategory.title}
    </Tag>
  </Link>
);
