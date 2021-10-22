import { Node } from 'gatsby';
import { Breadcrumb } from './breadcrumb';
import { Mdx } from './page';

export interface File {
  publicURL: string;
}

export interface Yaml {
  title: string;
  slug: string;
  description: string;
  category?: Yaml;
  parentCategory: Yaml;
  pages?: Mdx[];
  categories?: Yaml[];
  breadcrumbs: Breadcrumb[];
  icon?: {
    small: string;
    large: File;
  };
}

export type YamlNode = Yaml & Node;
