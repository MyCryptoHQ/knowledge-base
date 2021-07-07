import { Node } from 'gatsby';
import { Breadcrumb } from './breadcrumb';
import { Mdx } from './page';

export interface Yaml {
  title: string;
  slug: string;
  description?: Mdx;
  category?: Yaml;
  pages?: Mdx[];
  categories?: Yaml[];
  breadcrumbs: Breadcrumb[];
}

export type YamlNode = Yaml & Node;
