import { Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const H4: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h4" {...rest} fontSize="18px" lineHeight="1" color="text.primary" marginBottom="24px">
    {children}
  </Heading>
);
