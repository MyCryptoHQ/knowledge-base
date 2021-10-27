import { Box, Flex, FlexProps } from '@mycrypto/ui';
import { FunctionComponent, ReactElement } from 'react';
import blue from '../../assets/images/banners/blue.png';
import green from '../../assets/images/banners/green.png';

export interface BannerProps {
  type: string;
  left: ReactElement;
}

const BANNER_TYPES = {
  blue,
  green
};

export const Banner: FunctionComponent<BannerProps & FlexProps> = ({ type, left, children, ...props }) => (
  <Flex
    minHeight="120px"
    justifyContent="space-between"
    sx={{
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.light',
      borderRadius: 'badge'
    }}
    {...props}>
    <Box minWidth={['100px', '150px', '300px']} marginX="4">
      {left}
    </Box>
    <Box
      flex={1}
      maxWidth="800px"
      padding="3"
      paddingLeft="5"
      sx={{
        background: `url(${BANNER_TYPES[type as 'blue' | 'green']})`,
        backgroundSize: 'auto 100%'
      }}>
      {children}
    </Box>
  </Flex>
);
