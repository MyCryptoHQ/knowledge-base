import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from '../../../../Link';
import Icon, { icons } from '../../../Icon';

const SOCIAL_MEDIA_LINKS: { url: string; icon: keyof typeof icons }[] = [
  {
    url: 'https://twitter.com/mycrypto',
    icon: 'twitter'
  },
  {
    url: 'https://www.facebook.com/mycryptoHQ/',
    icon: 'facebook'
  },
  {
    url: 'https://medium.com/@mycrypto',
    icon: 'medium'
  },
  {
    url: 'https://www.linkedin.com/company/mycrypto',
    icon: 'linkedin'
  },
  {
    url: 'https://github.com/MyCryptoHQ',
    icon: 'github'
  },
  {
    url: 'https://www.reddit.com/r/mycrypto/',
    icon: 'reddit'
  },
  {
    url: 'https://discord.gg/VSaTXEA',
    icon: 'discord'
  }
];

const StyledSocials = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Socials: FunctionComponent = () => (
  <StyledSocials>
    {SOCIAL_MEDIA_LINKS.map((socialMedia, index) => (
      <Link key={index} to={socialMedia.url} external={true}>
        <Icon icon={socialMedia.icon} />
      </Link>
    ))}
  </StyledSocials>
);

export default Socials;
