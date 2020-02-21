import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoints';
import Heading from '../Heading';
import AboutMyCrypto from './AboutMyCrypto';
import Divider from './Divider';
import Donate from './Donate';
import LinkSet from './LinkSet';

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.secondary};
  border-top: 1px solid ${({ theme }) => theme.footerBorder};
  color: ${({ theme }) => theme.textInverted};

  ${Heading} {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textInverted};
    margin: 0 0 7px;
    padding: 0;
  }
`;

const FooterContainer = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 1180px;
  display: flex;
  justify-content: center;
  padding: 41px 33px;

  ${breakpoint('lg', 'max')`
    flex-direction: column;
    text-align: center;
  `};
`;

const Footer: FunctionComponent = () => (
  <StyledFooter>
    <FooterContainer>
      <AboutMyCrypto />
      <Divider />
      <LinkSet />
      <Divider />
      <Donate />
    </FooterContainer>
  </StyledFooter>
);

export default Footer;
