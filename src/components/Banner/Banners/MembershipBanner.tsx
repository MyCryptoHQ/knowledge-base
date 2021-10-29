import { t, Trans } from '@lingui/macro';
import { Body, Flex, FlexProps, Image } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import logo from '../../../assets/images/membership.svg';
import { Link } from '../../Link';
import { Banner } from '../Banner';

export const MembershipBanner: FunctionComponent<FlexProps> = (props) => (
  <Link
    to="https://app.mycrypto.com/membership?utm_medium=organic&utm_source=support&utm_campaign=banner"
    external={true}>
    <Banner
      type="blue"
      left={
        <Flex height="100%" justifyContent="center" alignItems="center">
          <Image src={logo} alt={t`Ledger`} maxWidth="200px" maxHeight="100px" />
        </Flex>
      }
      {...props}>
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Body color="white" fontSize={['18px', null, '35px']} lineHeight={['22px', null, '54px']} fontWeight="bold">
          <Trans>Support MyCrypto, become a member!</Trans>
        </Body>
      </Flex>
    </Banner>
  </Link>
);
