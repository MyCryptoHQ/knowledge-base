import { MarkdownBody, MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FunctionComponent } from 'react';
import shortcodes from '../markdown';

interface Props {
  body: MarkdownBody;
}

const PageBody: FunctionComponent<Props> = ({ body }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{body}</MDXRenderer>
  </MDXProvider>
);

export default PageBody;
