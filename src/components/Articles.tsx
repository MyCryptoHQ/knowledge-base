import { Box, BoxProps, SubHeading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Grid } from './Grid';

export interface ArticlesProps {
  title: string;
  columns?: number;
}

export const Articles: FunctionComponent<ArticlesProps & BoxProps> = ({ title, columns = 3, children, ...props }) => (
  <Box {...props}>
    <SubHeading fontSize="large" lineHeight="120%" marginBottom="4">
      {title}
    </SubHeading>
    <Grid columns={columns}>{children}</Grid>
  </Box>
);
