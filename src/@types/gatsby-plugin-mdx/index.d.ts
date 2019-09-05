declare module 'gatsby-plugin-mdx' {
  import React from 'react';

  interface MDXRendererProps {
    children: any;
  }

  export class MDXRenderer extends React.Component<MDXRendererProps> {}
}
