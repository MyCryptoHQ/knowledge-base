import { Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const H2: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h2" {...rest} fontSize="medium" lineHeight="1" marginBottom="24px">
    {children}
  </Heading>
);
