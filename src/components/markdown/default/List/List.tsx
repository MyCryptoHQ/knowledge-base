import { Box, TextProps } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export type ListProps = TextProps;

export const List: FunctionComponent<ListProps> = ({ children, ...props }) => (
  <Box margin="0" sx={{ p: { margin: '1.25rem' } }} {...props}>
    {children}
  </Box>
);
