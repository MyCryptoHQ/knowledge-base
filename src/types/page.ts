import { MarkdownBody } from '@mdx-js/react';
import { Node } from 'gatsby';
import { Breadcrumb } from './breadcrumb';
import { Yaml } from './category';

/**
 * MDX node which has all page data.
 */
export interface Mdx {
  slug: string;
  frontmatter: MdxFrontmatter;
  rawBody: string;
  fileAbsolutePath: string;
  body: MarkdownBody;
  excerpt: string;
  headings: MdxHeading[];
  html: string;
  mdxAST: string;
  tableOfContents: string;
  timeToRead: string;
  wordCount: string;
  category: Yaml;
  breadcrumbs: Breadcrumb[];
  relatedArticles?: Mdx[];
}

interface MdxFrontmatter {
  title: string;
  description: string;
  tags: string[];
  datePublished: string;
  dateModified: string;
  related_articles?: string[];
}

interface MdxHeading {
  value: string;
  depth: number;
}

export type MdxNode = Mdx & Node;

export interface PageResult {
  slug: string;
  excerpt?: string;
  frontmatter: {
    title: string;
    tags?: string[];
  };
}

export type SearchResult = Pick<Mdx, 'slug' | 'excerpt'> & { title: string; tags: string[] };
