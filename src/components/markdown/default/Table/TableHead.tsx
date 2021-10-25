import { Box } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const TableHead: FunctionComponent = ({ children, ...props }) => (
  <Box as="thead" backgroundColor="table.background" {...props}>
    {children}
  </Box>
);
