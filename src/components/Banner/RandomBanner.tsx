import { FlexProps } from '@mycrypto/ui';
import { FunctionComponent, useMemo } from 'react';
import { LedgerBanner } from './LedgerBanner';
import { MembershipBanner } from './MembershipBanner';

const BANNERS = [LedgerBanner, MembershipBanner];

export const RandomBanner: FunctionComponent<FlexProps> = (props) => {
  const Banner = useMemo(() => BANNERS[Math.floor(Math.random() * BANNERS.length)], []);

  return <Banner {...props} />;
};
