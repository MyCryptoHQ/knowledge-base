import { t, Trans } from '@lingui/macro';
import { Body, Flex, FlexProps, Image } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import logo from '../../assets/images/logos/ledger.svg';
import { Link } from '../Link';
import { Banner } from './Banner';

export const LedgerBanner: FunctionComponent<FlexProps> = (props) => (
  <Link to="https://shop.ledger.com/?r=1985" external={true}>
    <Banner
      type="green"
      left={
        <Flex height="100%" justifyContent="center" alignItems="center">
          <Image src={logo} alt={t`Ledger`} maxWidth="200px" />
        </Flex>
      }
      {...props}>
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Body color="white" fontSize={['18px', null, '45px']} lineHeight={['22px', null, '54px']} fontWeight="bold">
          <Trans>Get a Ledger hardware wallet</Trans>
        </Body>
      </Flex>
    </Banner>
  </Link>
);
