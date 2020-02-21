import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/logo-2.svg';
import { Link } from 'gatsby';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

const LogoImage = styled.img`
  width: 16rem;
  height: 3.9rem;
`;

const Logo: FunctionComponent = () => (
  <LogoContainer>
    <LogoLink to="/">
      <LogoImage src={logo} alt="MyCrypto logo" />
    </LogoLink>
  </LogoContainer>
);

export default Logo;
