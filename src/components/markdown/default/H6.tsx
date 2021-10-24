import { Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const H6: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h6" {...rest} fontSize="14px" lineHeight="1" color="text.discrete" marginBottom="24px">
    {children}
  </Heading>
);
