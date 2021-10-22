import { Box, BoxProps, Container } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export const Section: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <Box width="100%" paddingY="48px" backgroundColor="background.muted" {...props}>
    <Container>{children}</Container>
  </Box>
);
