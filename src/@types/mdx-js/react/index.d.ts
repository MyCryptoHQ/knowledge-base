/**
 * MDX v2.x.x (currently in beta) provides its own TypeScript definitions, but the plugin we're using
 * relies on v1.x.x, so we have to provide our own types for now.
 */
declare module '@mdx-js/react' {
  import React from 'react';

  type ComponentType =
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'thematicBreak'
    | 'blockquote'
    | 'ul'
    | 'ol'
    | 'li'
    | 'table'
    | 'thead'
    | 'tbody'
    | 'tr'
    | 'td'
    | 'pre'
    | 'code'
    | 'em'
    | 'strong'
    | 'del'
    | 'inlineCode'
    | 'hr'
    | 'a'
    | 'img'
    | string;

  // tslint:disable-next-line:no-any
  export type Components = { [key in ComponentType]?: React.ComponentType<any> };

  export interface MDXProviderProps {
    children: React.ReactNode;
    components: Components;
  }

  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
