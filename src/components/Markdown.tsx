import { MarkdownBody, MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FunctionComponent } from 'react';
import shortcodes from './markdown';

export interface MarkdownProps {
  body: MarkdownBody;
}

export const Markdown: FunctionComponent<MarkdownProps> = ({ body }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{body}</MDXRenderer>
  </MDXProvider>
);
