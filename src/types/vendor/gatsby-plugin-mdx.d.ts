declare module 'gatsby-plugin-mdx' {
  import React from 'react';

  interface MDXRendererProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
  }

  export class MDXRenderer extends React.Component<MDXRendererProps> {}
}
