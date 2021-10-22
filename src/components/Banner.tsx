import { Flex, FlexProps, Image } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import blue from '../assets/images/banners/blue.png';
import green from '../assets/images/banners/green.png';

export enum BannerType {
  Blue = 'Blue',
  Green = 'Green'
}

export interface BannerProps {
  type: BannerType;
}

const BANNER_TYPES: Record<BannerType, string> = {
  [BannerType.Blue]: blue,
  [BannerType.Green]: green
};

export const Banner: FunctionComponent<BannerProps & FlexProps> = ({ type, children, ...props }) => (
  <Flex
    minHeight="120px"
    sx={{
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'badge',
      position: 'relative'
    }}
    {...props}
  >
    {children}
    <Image
      src={BANNER_TYPES[type]}
      height="100%"
      sx={{
        position: 'absolute',
        right: '0',
        pointerEvents: 'none'
      }}
    />
  </Flex>
);
