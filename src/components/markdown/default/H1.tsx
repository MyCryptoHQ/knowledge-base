import { Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const H1: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h1" {...rest} fontSize="45px" lineHeight="54px" color="text.primary" marginBottom="24px">
    {children}
  </Heading>
);
