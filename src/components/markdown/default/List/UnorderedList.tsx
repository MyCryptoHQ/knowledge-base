import { Box } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const UnorderedList: FunctionComponent = ({ children, ...props }) => (
  <Box
    as="ul"
    marginBottom="4"
    sx={{
      listStyleType: 'disc'
    }}
    {...props}
  >
    {children}
  </Box>
);
