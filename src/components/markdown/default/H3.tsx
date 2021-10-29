import { Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const H3: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h3" {...rest} fontSize="20px" lineHeight="1" marginBottom="24px">
    {children}
  </Heading>
);
