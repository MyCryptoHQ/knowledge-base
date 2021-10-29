import { Body } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const Paragraph: FunctionComponent = ({ children }) => (
  <Body lineHeight="24px" marginBottom="4">
    {children}
  </Body>
);
