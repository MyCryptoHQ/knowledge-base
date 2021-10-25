import { InlineBody } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const Link: FunctionComponent = ({ children, ...props }) => (
  <InlineBody as="a" color="link" sx={{ textDecoration: 'none', display: 'inline !important' }} {...props}>
    {children}
  </InlineBody>
);
