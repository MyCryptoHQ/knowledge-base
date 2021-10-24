import { InlineBody } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const DeletedText: FunctionComponent = ({ children, ...rest }) => (
  <InlineBody as="del" {...rest}>
    {children}
  </InlineBody>
);
