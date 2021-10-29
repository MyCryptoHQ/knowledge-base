import { Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const H1: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h1" {...rest} fontSize="large" lineHeight="120%" marginBottom="24px">
    {children}
  </Heading>
);
