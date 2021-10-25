import { Box } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const Blockquote: FunctionComponent = ({ children, ...props }) => (
  <Box
    marginX="2"
    marginBottom="4"
    paddingX="1em"
    paddingY="2"
    sx={{
      borderWidth: '8px',
      borderLeftStyle: 'solid',
      borderColor: 'background.quote',
      '& > :last-child': { marginBottom: '0' },
      p: {
        fontSize: '20px',
        color: 'background.quote'
      }
    }}
    {...props}>
    {children}
  </Box>
);
