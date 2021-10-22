import { FunctionComponent } from 'react';
import Root from '../Root';
import { Metadata, MetadataProps } from './Metadata';

export type PageProps = MetadataProps;

export const Page: FunctionComponent<PageProps> = ({ children, ...props }) => (
  <Root>
    <Metadata {...props} />
    {children}
  </Root>
);
