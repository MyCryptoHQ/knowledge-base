import { Body } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const OrderedList: FunctionComponent = ({ children, ...props }) => (
  <Body
    as="ol"
    marginBottom="4"
    sx={{
      listStyleType: 'decimal'
    }}
    {...props}>
    {children}
  </Body>
);
