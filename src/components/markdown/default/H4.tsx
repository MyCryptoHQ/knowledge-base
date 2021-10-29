import { Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const H4: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h4" {...rest} fontSize="small" lineHeight="1" marginBottom="24px">
    {children}
  </Heading>
);
