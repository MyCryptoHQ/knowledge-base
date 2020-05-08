import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Heading from '../../ui/Heading';
import { HeaderContainer } from '../Header';

const HeroContainer = styled(HeaderContainer)`
  min-height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Heading} {
    color: white;
  }
`;

const Hero: FunctionComponent = ({ children }) => <HeroContainer>{children}</HeroContainer>;

export default Hero;
