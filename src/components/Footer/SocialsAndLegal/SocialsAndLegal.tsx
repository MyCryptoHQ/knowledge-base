import * as React from 'react';
import ExternalLink from '../../ExternalLink/ExternalLink';
import './SocialsAndLegal.scss';

interface Link {
  link: string;
  text: string;
}

const SOCIAL_MEDIA_LINKS: Link[] = [
  {
    link: 'https://twitter.com/mycrypto',
    text: 'twitter'
  },
  {
    link: 'https://www.facebook.com/mycryptoHQ/',
    text: 'facebook'
  },
  {
    link: 'https://medium.com/@mycrypto',
    text: 'medium'
  },
  {
    link: 'https://www.linkedin.com/company/mycrypto',
    text: 'linkedin'
  },
  {
    link: 'https://github.com/MyCryptoHQ',
    text: 'github'
  },
  {
    link: 'https://www.reddit.com/r/mycrypto/',
    text: 'reddit'
  },
  {
    link: 'https://discord.gg/VSaTXEA',
    text: 'discord'
  }
];

const SocialsAndLegal: React.StatelessComponent = () => (
  <div className="socials-and-legal">
    <div className="socials">
      {SOCIAL_MEDIA_LINKS.map((socialMediaLink, index) => (
        <ExternalLink key={index} className="social-media-link" to={socialMediaLink.link}>
          <i className={`sm-icon sm-logo-${socialMediaLink.text}`} />
        </ExternalLink>
      ))}
    </div>
    <div className="legal">
      <p>&copy; {new Date().getFullYear()} MyCrypto, Inc.</p>
    </div>
  </div>
);

export default SocialsAndLegal;
