import { Box } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const KeyboardInput: FunctionComponent = ({ children, ...props }) => (
  <Box
    as="kbd"
    display="inline-block"
    backgroundColor="background.muted"
    verticalAlign="middle"
    paddingX="4x"
    paddingY="2px"
    color="text.primary"
    fontWeight="bold"
    sx={{
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.dark',
      borderRadius: 'badge',
      whiteSpace: 'nowrap',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset'
    }}
    {...props}
  >
    {children}
  </Box>
);
