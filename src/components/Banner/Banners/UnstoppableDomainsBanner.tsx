import { t, Trans } from '@lingui/macro';
import { Body, Flex, FlexProps, Image } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import logo from '../../../assets/images/logos/unstoppable-domains.svg';
import { Link } from '../../Link';
import { Banner } from '../Banner';

export const UnstoppableDomainsBanner: FunctionComponent<FlexProps> = (props) => (
  <Link to="https://unstoppabledomains.com/r/mycrypto" external={true}>
    <Banner
      type="lightBlue"
      left={
        <Flex height="100%" justifyContent="center" alignItems="center">
          <Image src={logo} alt={t`Unstoppable Domains`} maxWidth="200px" />
        </Flex>
      }
      {...props}>
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Body color="white" fontSize={['18px', null, '45px']} lineHeight={['22px', null, '54px']} fontWeight="bold">
          <Trans>Buy a .crypto domain today</Trans>
        </Body>
      </Flex>
    </Banner>
  </Link>
);
