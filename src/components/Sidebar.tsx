import { Trans } from '@lingui/macro';
import { Body, Box, Button, Flex, Icon, SubHeading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import Card from './Card';
import { Link } from './Link';

export const Sidebar: FunctionComponent = () => (
  <Box maxWidth="362px">
    <Card marginBottom="4">Share</Card>

    <Card marginBottom="4" backgroundColor="background.muted">
      <SubHeading fontSize="18px" lineHeight="22px" marginBottom="12px" color="text.primary">
        <Trans>MyCrypto is the number one way to manage all of your Ethereum Accounts</Trans>
      </SubHeading>
      <Body color="text.accent" marginBottom="3">
        <Trans>
          You can always email us for one-on-one help using{' '}
          <Link to="mailto:support@mycrypto.com" external={true}>
            support@mycrypto.com
          </Link>
        </Trans>
      </Body>
      <Link to="mailto:support@mycrypto.com" external={true}>
        <Button>
          <Trans>Send Us A Message</Trans>
        </Button>
      </Link>
    </Card>

    <Card>
      <Flex alignItems="center">
        <Icon type="support" width="24px" marginRight="2" />
        <SubHeading fontSize="12px" lineHeight="15px" color="text.accent" sx={{ textTransform: 'uppercase' }}>
          <Trans>Support MyCrypto</Trans>
        </SubHeading>
      </Flex>
      <Body color="text.accent" marginBottom="3">
        <Trans>
          You can always email us for one-on-one help using{' '}
          <Link to="mailto:support@mycrypto.com" external={true}>
            support@mycrypto.com
          </Link>
        </Trans>
      </Body>
      <Link to="mailto:support@mycrypto.com" external={true}>
        <Button>
          <Trans>Send Us A Message</Trans>
        </Button>
      </Link>
    </Card>
  </Box>
);
