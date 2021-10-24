import { Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const H5: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h5" {...rest} fontSize="14px" lineHeight="1" color="text.primary" marginBottom="24px">
    {children}
  </Heading>
);
