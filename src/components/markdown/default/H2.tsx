import { Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const H2: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h2" {...rest} fontSize="24px" lineHeight="1" color="text.primary" marginBottom="24px">
    {children}
  </Heading>
);
