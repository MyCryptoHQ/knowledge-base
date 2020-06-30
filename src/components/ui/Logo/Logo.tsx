import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/logo.svg';

const StyledLogo = styled.img`
  width: 42px;
  height: 42px;
  vertical-align: middle;
`;

const Logo: FunctionComponent = () => (
  <Link to="/">
    <StyledLogo src={logo} alt="MyCrypto" />
  </Link>
);

export default Logo;
