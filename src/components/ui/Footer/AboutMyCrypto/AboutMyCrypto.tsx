import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Text from '../../Text';
import Socials from './Socials';
import breakpoint from '../../../../theme/breakpoints';

const StyledAboutMyCrypto = styled.section``;

const AboutText = styled(Text)`
  display: block;
  font-size: 1rem !important;
  color: ${({ theme }) => theme.textInverted};
  font-weight: 300;
  max-width: 250px;
  margin-bottom: 15px;

  ${breakpoint('lg', 'max')`
    margin: auto;
  `};
`;

const AboutMyCrypto: FunctionComponent = () => (
  <StyledAboutMyCrypto>
    <Logo />
    <AboutText>
      MyCrypto is an open-source, client-side tool for generating ether wallets, handling ERC-20
      tokens, and interacting with the blockchain more easily. Developed by and for the community
      since 2015, we’re focused on building awesome products that put the power in people’s hands.
    </AboutText>
    <Socials />
    <AboutText>© {new Date().getFullYear()} MyCrypto, Inc.</AboutText>
  </StyledAboutMyCrypto>
);

export default AboutMyCrypto;
