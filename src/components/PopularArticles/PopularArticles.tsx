import React, { FunctionComponent } from 'react';
import PageSelector from '../PageSelector';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Grid from '../ui/Grid';

const PopularArticles: FunctionComponent = () => (
  <Section>
    <Container>
      <Heading as="h2">Popular Articles</Heading>
      <Grid columnSize="45rem" gapSize="2rem">
        <PageSelector slug="how-to/getting-started/how-to-get-started-on-mycrypto" />
        <PageSelector slug="troubleshooting/tokens/adding-new-token-and-sending-custom-tokens" />
        <PageSelector slug="staying-safe/protecting-yourself-and-your-funds" />
        <PageSelector slug="general-knowledge/ethereum-blockchain/more-help-support-and-communities" />
        <PageSelector slug="staying-safe/hardware-wallet-recommendations" />
        <PageSelector slug="how-to/offline/how-to-run-mycrypto-offline-and-locally" />
        <PageSelector slug="general-knowledge/ethereum-blockchain/a-glossary-of-common-terms-in-the-ethereum-crypto-space" />
        <PageSelector slug="general-knowledge/ethereum-blockchain/what-is-nonce" />
      </Grid>
    </Container>
  </Section>
);

export default PopularArticles;
