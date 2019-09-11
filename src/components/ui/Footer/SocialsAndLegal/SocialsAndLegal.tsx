import React, { FunctionComponent } from 'react';
import './SocialsAndLegal.scss';
import Link from '../../../Link';
import Icon from '../../Icon';

interface Item {
  link: string;
  icon: string;
}

const SOCIAL_MEDIA_LINKS: Item[] = [
  {
    link: 'https://twitter.com/mycrypto',
    icon: 'twitter'
  },
  {
    link: 'https://www.facebook.com/mycryptoHQ/',
    icon: 'facebook'
  },
  {
    link: 'https://medium.com/@mycrypto',
    icon: 'medium'
  },
  {
    link: 'https://www.linkedin.com/company/mycrypto',
    icon: 'linkedin'
  },
  {
    link: 'https://github.com/MyCryptoHQ',
    icon: 'github'
  },
  {
    link: 'https://www.reddit.com/r/mycrypto/',
    icon: 'reddit'
  },
  {
    link: 'https://discord.gg/VSaTXEA',
    icon: 'discord'
  }
];

const SocialsAndLegal: FunctionComponent = () => (
  <div className="socials-and-legal">
    <div className="socials">
      {SOCIAL_MEDIA_LINKS.map((socialMediaLink, index) => (
        <Link key={index} to={socialMediaLink.link} external={true}>
          <Icon icon={socialMediaLink.icon as any} />
        </Link>
      ))}
    </div>
    <div className="legal">
      <p>&copy; {new Date().getFullYear()} MyCrypto, Inc.</p>
    </div>
  </div>
);

export default SocialsAndLegal;
