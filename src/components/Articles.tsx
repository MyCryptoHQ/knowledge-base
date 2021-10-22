import { Box, BoxProps, SubHeading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export interface ArticlesProps {
  title: string;
  columns?: number;
}

export const Articles: FunctionComponent<ArticlesProps & BoxProps> = ({ title, columns = 3, children, ...props }) => (
  <Box {...props}>
    <SubHeading fontSize="45px" lineHeight="54px" marginBottom="4" color="text.primary">
      {title}
    </SubHeading>
    <Box display="grid" sx={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '25px' }}>
      {children}
    </Box>
  </Box>
);
