import { Box } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const TableHeading: FunctionComponent = ({ children, ...props }) => (
  <Box
    as="th"
    paddingX="1"
    paddingY="3"
    textAlign="left"
    color="text.primary"
    fontSize="tiny"
    fontWeight="normal"
    letterSpacing="1px"
    sx={{
      textTransform: 'uppercase',
      ':first-of-type': {
        paddingLeft: '20px'
      }
    }}
    {...props}>
    {children}
  </Box>
);
