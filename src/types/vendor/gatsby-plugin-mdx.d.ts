declare module 'gatsby-plugin-mdx' {
  import { Component } from 'react';

  interface MDXRendererProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
  }

  export class MDXRenderer extends Component<MDXRendererProps> {}
}
