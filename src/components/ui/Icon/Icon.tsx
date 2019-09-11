import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import * as discord from '../../../assets/images/icons/social/discord.svg';
import * as facebook from '../../../assets/images/icons/social/facebook.svg';
import * as github from '../../../assets/images/icons/social/github.svg';
import * as linkedin from '../../../assets/images/icons/social/linkedin.svg';
import * as medium from '../../../assets/images/icons/social/medium.svg';
import * as reddit from '../../../assets/images/icons/social/reddit.svg';
import * as twitter from '../../../assets/images/icons/social/twitter.svg';

const icons = {
  discord,
  facebook,
  github,
  linkedin,
  medium,
  reddit,
  twitter
};

interface Props {
  icon: keyof typeof icons;
}

const StyledIcon = styled.img`
  width: 20px;
  vertical-align: middle;
`;

const Icon: FunctionComponent<Props> = ({ icon }) => <StyledIcon src={icons[icon]} />;

export default Icon;
