import { Node } from 'gatsby';
import { Mdx } from './page';

export interface Yaml {
  title: string;
  slug: string;
  description: string;
  category?: Yaml;
  pages?: Mdx[];
  categories?: Yaml[];
}

export type YamlNode = Yaml & Node;
