import { Box, BoxProps } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export type CardProps = BoxProps;

export const Card: FunctionComponent<CardProps> = ({ children, ...props }) => (
  <Box
    p="24px"
    backgroundColor="background.page"
    sx={{ borderRadius: 'large', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.07)' }}
    {...props}>
    {children}
  </Box>
);

export default Card;
