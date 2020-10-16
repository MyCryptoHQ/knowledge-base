/**
 * MDX v2.x.x (currently in beta) provides its own TypeScript definitions, but the plugin we're using
 * relies on v1.x.x, so we have to provide our own types for now.
 */
declare module '@mdx-js/react' {
  import { ComponentType, ReactNode, Component } from 'react';

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Components = { [key in ComponentType]?: ComponentType<any> };

  export interface MDXProviderProps {
    children: ReactNode;
    components: Components;
  }

  export class MDXProvider extends Component<MDXProviderProps> {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type MarkdownBody = any;
}
