import { t, Trans } from '@lingui/macro';
import { Body, Box, Breadcrumb, Breadcrumbs, Button, Container, Image, SubHeading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import sadWallet from '../assets/images/sad-wallet.svg';
import { Link, Page } from '../components';

const Error404: FunctionComponent = () => (
  <Page title={t`Page Not Found`} noIndex={true}>
    <Container width="100%">
      <Breadcrumbs paddingY="48px">
        <Breadcrumb>
          <Link to="/">
            <Trans>Homepage</Trans>
          </Link>
        </Breadcrumb>
        <Breadcrumb>
          <Trans>Page Not Found</Trans>
        </Breadcrumb>
      </Breadcrumbs>
    </Container>

    <Container flex="1" paddingTop="5" textAlign="center">
      <Box maxWidth="500px">
        <Image src={sadWallet} alt="Sad wallet" width="300px" marginBottom="4" />
        <SubHeading color="text.primary" fontSize="24px" lineHeight="1" marginBottom="3">
          <Trans>Page Not Found</Trans>
        </SubHeading>
        <Body fontSize="18px" lineHeight="1.5" marginBottom="4">
          <Trans>Looks like you got lost somewhere along the way. Don't worry, the wizard can help you get back!</Trans>
        </Body>
        <Link to="/">
          <Button marginBottom="5">
            <Trans>Go Home</Trans>
          </Button>
        </Link>
      </Box>
    </Container>
  </Page>
);

export default Error404;
