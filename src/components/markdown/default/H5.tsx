import { Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const H5: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h5" {...rest} fontSize="tiny" lineHeight="1" marginBottom="24px">
    {children}
  </Heading>
);
