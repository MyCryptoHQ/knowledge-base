import { Box } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const TableCell: FunctionComponent = ({ children, ...props }) => (
  <Box
    as="td"
    paddingX="1"
    paddingY="3"
    textAlign="left"
    color="text.primary"
    sx={{
      ':first-of-type': {
        paddingLeft: '20px'
      }
    }}
    {...props}>
    {children}
  </Box>
);
