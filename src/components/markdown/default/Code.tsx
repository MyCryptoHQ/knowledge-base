import { Box } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const Code: FunctionComponent = ({ children, ...props }) => (
  <Box
    as="code"
    display="block"
    padding="24px"
    fontFamily="mono"
    backgroundColor="background.muted"
    overflowX="auto"
    marginBottom="4"
    sx={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'border.dark', borderRadius: 'badge' }}
    {...props}
  >
    {children}
  </Box>
);
