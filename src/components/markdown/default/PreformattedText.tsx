import { Body } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const PreformattedText: FunctionComponent = ({ children, ...props }) => (
  <Body as="pre" fontFamily="mono" {...props}>
    {children}
  </Body>
);
