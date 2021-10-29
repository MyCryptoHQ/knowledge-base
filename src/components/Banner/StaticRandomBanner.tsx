import { FlexProps } from '@mycrypto/ui';
import { FunctionComponent, useMemo } from 'react';
import {
  CoinbaseBanner,
  LedgerBanner,
  MembershipBanner,
  QuickNodeBanner,
  TrezorBanner,
  UnstoppableDomainsBanner
} from './Banners';

const BANNERS = [
  CoinbaseBanner,
  LedgerBanner,
  MembershipBanner,
  QuickNodeBanner,
  TrezorBanner,
  UnstoppableDomainsBanner
];

const StaticRandomBanner: FunctionComponent<FlexProps> = (props) => {
  const Banner = useMemo(() => BANNERS[Math.floor(Math.random() * BANNERS.length)], []);

  return <Banner {...props} />;
};

export default StaticRandomBanner;
