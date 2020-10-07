import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import myCryptoLogo from '../../../../../assets/images/logo-2.svg';

const StyledLogo = styled.img`
  width: 152px;
  height: 38px;
`;

const Logo: FunctionComponent = () => <StyledLogo alt="MyCrypto" src={myCryptoLogo} />;

export default Logo;
