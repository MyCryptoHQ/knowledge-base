import { InlineBody } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const InlineCode: FunctionComponent = ({ children, ...props }) => (
  <InlineBody as="code" fontFamily="mono" backgroundColor="background.muted" paddingX="1" {...props}>
    {children}
  </InlineBody>
);
