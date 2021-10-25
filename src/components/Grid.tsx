import { Box, BoxProps } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export interface GridProps {
  columns: number;
}

export const Grid: FunctionComponent<GridProps & BoxProps> = ({ columns, children, ...props }) => (
  <Box
    display="grid"
    sx={{
      gridTemplateColumns: ['repeat(1, 1fr)', null, `repeat(${columns}, 1fr)`],
      gap: '25px'
    }}
    {...props}
  >
    {children}
  </Box>
);
