import * as React from 'react';
import ExternalLink from '../../ExternalLink/ExternalLink';
import './Linkset.scss';

interface Link {
  title: string;
  link: string;
}

interface Column {
  heading: string;
  links: Link[];
}

const LINK_COLUMNS: Column[] = [
  {
    heading: 'Company',
    links: [
      {
        title: 'MyCrypto.com',
        link: 'https://www.mycrypto.com/'
      },
      {
        title: 'Help & Support',
        link: 'https://support.mycrypto.com/'
      },
      {
        title: 'Our Team',
        link: 'https://about.mycrypto.com/'
      },
      {
        title: 'Press',
        link: 'mailto://press@mycrypto.com'
      },
      {
        title: 'Privacy Policy',
        link: 'https://about.mycrypto.com/privacy/'
      }
    ]
  },
  {
    heading: 'Support Us',
    links: [
      {
        title: 'Ledger Wallet',
        link: 'https://www.ledgerwallet.com/r/1985?path=/products/'
      },
      {
        title: 'TREZOR',
        link: 'https://shop.trezor.io/?a=mycrypto.com'
      },
      {
        title: 'ether.card',
        link: 'https://ether.cards/?utm_source=mycrypto&utm_medium=cpm&utm_campaign=site'
      }
    ]
  },
  {
    heading: 'Other Products',
    links: [
      {
        title: 'EtherAddressLookup',
        link:
          'https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn'
      },
      {
        title: 'EtherScamDB',
        link: 'https://etherscamdb.info/'
      },
      {
        title: 'MoneroVision',
        link: 'https://monerovision.com/'
      }
    ]
  }
];

const Linkset: React.StatelessComponent = () => (
  <div className="linkset">
    {LINK_COLUMNS.map(column => (
      <div key={column.heading} className="linkset-column">
        <h2>{column.heading}</h2>
        <ul>
          {column.links.map(link => (
            <li key={link.title}>
              <ExternalLink to={link.link}>{link.title}</ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Linkset;
