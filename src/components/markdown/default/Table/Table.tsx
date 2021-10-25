import { Box, BoxProps } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const Table: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <Box
    as="table"
    width="100%"
    marginX="0"
    marginY="4"
    overflow="auto"
    sx={{ borderSpacing: '0', borderCollapse: 'collapse' }}
    {...props}
  >
    {children}
  </Box>
);
