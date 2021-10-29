import { t, Trans } from '@lingui/macro';
import { Body, Flex, FlexProps, Image } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import logo from '../../../assets/images/logos/coinbase.svg';
import { Link } from '../../Link';
import { Banner } from '../Banner';

export const CoinbaseBanner: FunctionComponent<FlexProps> = (props) => (
  <Link to="https://coinbase-consumer.sjv.io/RVmkN" external={true}>
    <Banner
      type="darkBlue"
      left={
        <Flex height="100%" justifyContent="center" alignItems="center">
          <Image src={logo} alt={t`Coinbase`} maxWidth="200px" />
        </Flex>
      }
      {...props}>
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Body color="white" fontSize={['18px', null, '45px']} lineHeight={['22px', null, '54px']} fontWeight="bold">
          <Trans>Buy ETH today</Trans>
        </Body>
      </Flex>
    </Banner>
  </Link>
);
