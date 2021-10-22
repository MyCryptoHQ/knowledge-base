import { Trans } from '@lingui/macro';
import { Body, Box, Heading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Categories } from './Categories';
import { Search } from './Search';

export const Hero: FunctionComponent = () => (
  <Box textAlign="center" marginY="5">
    <Heading color="text.primary">
      <Trans>What can we help you with?</Trans>
    </Heading>
    <Body fontSize="24px">
      <Trans>Search or browse for articles to help you get started or get un-stuck.</Trans>
    </Body>
    <Search marginTop="5" />
    <Categories marginTop="48px" />
  </Box>
);
