import { MarkdownBody } from '@mdx-js/react';
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
}

interface MdxFrontmatter {
  title: string;
  description: string;
  tags: string[];
  datePublished: string;
  dateModified: string;
}

interface MdxHeading {
  value: string;
  depth: number;
}
