import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Text from '../../../Text';

const StyledAboutText = styled(Text)`
  display: block;
  font-size: 1rem !important;
  color: ${({ theme }) => theme.textInverted};
  font-weight: 300;
  max-width: 250px;
`;

const AboutText: FunctionComponent = () => (
  <StyledAboutText>
    MyCrypto is an open-source, client-side tool for generating ether wallets, handling ERC-20
    tokens, and interacting with the blockchain more easily. Developed by and for the community
    since 2015, we’re focused on building awesome products that put the power in people’s hands.
  </StyledAboutText>
);

export default AboutText;
