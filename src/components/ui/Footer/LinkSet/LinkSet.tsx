import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from '../../../Link';
import Heading from '../../Heading';

const LINK_COLUMNS: Array<{
  heading: string;
  links: Array<{
    title: string;
    url: string;
  }>;
}> = [
  {
    heading: 'Company',
    links: [
      {
        title: 'MyCrypto.com',
        url: 'https://www.mycrypto.com/'
      },
      {
        title: 'Help & Support',
        url: 'https://support.mycrypto.com/'
      },
      {
        title: 'Our Team',
        url: 'https://about.mycrypto.com/'
      },
      {
        title: 'Press',
        url: 'mailto://press@mycrypto.com'
      },
      {
        title: 'Privacy Policy',
        url: 'https://about.mycrypto.com/privacy/'
      }
    ]
  },
  {
    heading: 'Support Us',
    links: [
      {
        title: 'Get a Ledger',
        url: 'https://www.ledgerwallet.com/r/1985?path=/products/'
      },
      {
        title: 'Get a Trezor',
        url: 'https://shop.trezor.io/?offer_id=10&aff_id=1735'
      },
      {
        title: 'Get QuikNode',
        url: 'https://quiknode.io?tap_a=67226-09396e&tap_s=860550-6c3251'
      },
      {
        title: 'Buy ETH on Coinbase',
        url: 'https://coinbase-consumer.sjv.io/RVmkN'
      },
      {
        title: 'Unstoppable Domains',
        url: 'https://unstoppabledomains.com/r/mycrypto'
      }
    ]
  },
  {
    heading: 'Other Products',
    links: [
      {
        title: 'EtherAddressLookup',
        url: 'https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn'
      },
      {
        title: 'CryptoScamDB',
        url: 'https://cryptoscamdb.org/'
      },
      {
        title: 'FindETH',
        url: 'https://findeth.io/'
      },
      {
        title: 'MoneroVision',
        url: 'https://monerovision.com/'
      }
    ]
  }
];

const StyledLinkSet = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex: 2 1;
  text-align: center;
`;

const Column = styled.div`
  margin: 32px 32px 32px 0;

  :last-child {
    margin-right: 0;
  }

  a {
    display: block;
    margin-bottom: 8px;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.footerLink};
  }
`;

const LinkSet: FunctionComponent = () => (
  <StyledLinkSet>
    {LINK_COLUMNS.map((column, index) => (
      <Column key={`column-${index}`}>
        <Heading as="h2">{column.heading}</Heading>
        {column.links.map((link) => (
          <Link key={link.url} to={link.url} external={true}>
            {link.title}
          </Link>
        ))}
      </Column>
    ))}
  </StyledLinkSet>
);

export default LinkSet;
