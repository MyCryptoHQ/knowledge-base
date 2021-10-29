import { t, Trans } from '@lingui/macro';
import { Body, Flex, FlexProps, Image } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import logo from '../../../assets/images/logos/trezor.svg';
import { Link } from '../../Link';
import { Banner } from '../Banner';

export const TrezorBanner: FunctionComponent<FlexProps> = (props) => (
  <Link to="https://shop.trezor.io/?offer_id=10&aff_id=1735" external={true}>
    <Banner
      type="lightGreen"
      left={
        <Flex height="100%" justifyContent="center" alignItems="center">
          <Image src={logo} alt={t`Trezor`} maxWidth="200px" />
        </Flex>
      }
      {...props}>
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Body color="white" fontSize={['18px', null, '45px']} lineHeight={['22px', null, '54px']} fontWeight="bold">
          <Trans>Get a Trezor hardware wallet</Trans>
        </Body>
      </Flex>
    </Banner>
  </Link>
);
