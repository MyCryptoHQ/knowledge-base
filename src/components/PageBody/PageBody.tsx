import React, { FunctionComponent } from 'react';
import { MarkdownBody } from '../../models/page';
import shortcodes from '../markdown';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

interface Props {
  body: MarkdownBody;
}

const PageBody: FunctionComponent<Props> = ({ body }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{body}</MDXRenderer>
  </MDXProvider>
);

export default PageBody;
