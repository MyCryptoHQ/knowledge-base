import {
  Footer as UIFooter,
  FooterAbout,
  FooterDonateAndSubscribe,
  FooterLink,
  FooterLinkColumn,
  FooterLinks,
  FooterSeparator
} from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { FOOTER_LINK_COLUMNS } from '../config';
import { Link } from './Link';

export const Footer: FunctionComponent = () => (
  <UIFooter>
    <FooterAbout />
    <FooterSeparator order={1} />
    <FooterLinks>
      {FOOTER_LINK_COLUMNS.map((column) => (
        <FooterLinkColumn key={column.heading} heading={column.heading}>
          {column.links.map((link, index) => (
            <FooterLink key={index}>
              <Link to={link.url} external={true}>
                {link.title}
              </Link>
            </FooterLink>
          ))}
        </FooterLinkColumn>
      ))}
    </FooterLinks>
    <FooterSeparator order={3} />
    <FooterDonateAndSubscribe listId="foo" tag="support.mycrypto.com" />
  </UIFooter>
);
