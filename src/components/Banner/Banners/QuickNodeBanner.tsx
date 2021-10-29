import { t, Trans } from '@lingui/macro';
import { Body, Flex, FlexProps, Image } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import logo from '../../../assets/images/logos/quicknode.svg';
import { Link } from '../../Link';
import { Banner } from '../Banner';

export const QuickNodeBanner: FunctionComponent<FlexProps> = (props) => (
  <Link to="https://quiknode.io/?tap_a=67226-09396e&tap_s=860550-6c3251" external={true}>
    <Banner
      type="black"
      left={
        <Flex height="100%" justifyContent="center" alignItems="center">
          <Image src={logo} alt={t`QuickNode`} maxWidth="200px" />
        </Flex>
      }
      {...props}>
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Body color="white" fontSize={['18px', null, '45px']} lineHeight={['22px', null, '54px']} fontWeight="bold">
          <Trans>Get your own node today</Trans>
        </Body>
      </Flex>
    </Banner>
  </Link>
);
