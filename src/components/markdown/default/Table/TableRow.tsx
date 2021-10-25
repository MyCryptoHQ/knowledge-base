import { Box } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const TableRow: FunctionComponent = ({ children, ...props }) => (
  <Box
    as="tr"
    sx={{
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'table.border'
    }}
    {...props}
  >
    {children}
  </Box>
);
