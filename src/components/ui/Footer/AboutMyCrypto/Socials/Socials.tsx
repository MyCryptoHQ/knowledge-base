import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../../../../../theme/breakpoints';
import Link from '../../../../Link';
import Icon, { icons } from '../../../Icon';

const SOCIAL_MEDIA_LINKS: Array<{ name: string; url: string; icon: keyof typeof icons }> = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/mycrypto',
    icon: 'twitter'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/mycryptoHQ/',
    icon: 'facebook'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/mycrypto',
    icon: 'medium'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/mycrypto',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/MyCryptoHQ',
    icon: 'github'
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/r/mycrypto/',
    icon: 'reddit'
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/VSaTXEA',
    icon: 'discord'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/mycryptohq',
    icon: 'telegram'
  }
];

const StyledSocials = styled.section`
  display: flex;
  justify-content: space-between;

  ${breakpoint('lg', 'max')`
    justify-content: center;
    margin: 1.5rem 0;

    a {
      margin-right: 1.5rem;
    }
  `};
`;

const Socials: FunctionComponent = () => (
  <StyledSocials>
    {SOCIAL_MEDIA_LINKS.map((socialMedia, index) => (
      <Link key={index} to={socialMedia.url} external={true}>
        <Icon name={socialMedia.name} icon={socialMedia.icon} />
      </Link>
    ))}
  </StyledSocials>
);

export default Socials;
