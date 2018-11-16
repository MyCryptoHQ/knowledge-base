import * as React from 'react';
import HorizontalRule from './HorizontalRule/HorizontalRule';
import VerticalRule from './VerticalRule/VerticalRule';
import LogoBox from './LogoBox/LogoBox';
import DonateAndSubscribe from './DonateAndSubscribe/DonateAndSubscribe';
import Linkset from './Linkset/Linkset';
import SocialsAndLegal from './SocialsAndLegal/SocialsAndLegal';
import './Footer.scss';

const MobileFooter = () => (
  <div className="mobile-only">
    <div className="footer">
      <LogoBox />
      <HorizontalRule />
      <DonateAndSubscribe />
      <HorizontalRule />
      <Linkset />
      <SocialsAndLegal />
    </div>
  </div>
);

const TabletFooter = () => (
  <div className="tablet-only">
    <div className="footer">
      <LogoBox />
      <VerticalRule />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 5 }}>
        <Linkset />
        <DonateAndSubscribe />
      </div>
    </div>
  </div>
);

const DesktopFooter = () => (
  <div className="desktop-only">
    <div className="footer-wrapper">
      <div className="footer">
        <LogoBox />
        <VerticalRule />
        <Linkset />
        <VerticalRule />
        <DonateAndSubscribe />
      </div>
    </div>
  </div>
);

const Footer: React.StatelessComponent = () => (
  <div className="footer-row">
    <MobileFooter />
    <TabletFooter />
    <DesktopFooter />
    {/*<div className="col-xs-12 col-sm-6 last-xs first-md col-md-4 col-lg-3 align-left">
      <div className="social-links">
        <a href="https://twitter.com/mycrypto" target="_blank" rel="noopener noreferrer">
          <i className="sm-icon sm-logo-twitter" />
        </a>
        <a href="https://www.facebook.com/mycryptoHQ/" target="_blank" rel="noopener noreferrer">
          <i className="sm-icon sm-logo-facebook" />
        </a>
        <a href="https://medium.com/@mycrypto" target="_blank" rel="noopener noreferrer">
          <i className="sm-icon sm-logo-medium" />
        </a>
        <a
          href="https://www.linkedin.com/company/mycrypto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="sm-icon sm-logo-linkedin" />
        </a>
        <a href="https://github.com/MyCryptoHQ" target="_blank" rel="noopener noreferrer">
          <i className="sm-icon sm-logo-github" />
        </a>
        <a href="https://www.reddit.com/r/mycrypto/" target="_blank" rel="noopener noreferrer">
          <i className="sm-icon sm-logo-reddit" />
        </a>
        <a href="https://discord.gg/VSaTXEA" target="_blank" rel="noopener noreferrer">
          <i className="sm-icon sm-logo-discord" />
        </a>
      </div>
      <div className="links">
        <a href="https://legacy.mycrypto.com" target="_blank" rel="noopener noreferrer">
          MyCrypto (Legacy Site)
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn"
          target="_blank"
          rel="noopener noreferrer"
        >
          EtherAddressLookup
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/ethersecuritylookup/bhhfhgpgmifehjdghlbbijjaimhmcgnf"
          target="_blank"
          rel="noopener noreferrer"
        >
          EtherSecurityLookup
        </a>
        <a href="https://etherscamdb.info/" target="_blank" rel="noopener noreferrer">
          EtherScamDB
        </a>
        <a
          href="https://legacy.mycrypto.com/helpers.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Helpers & ENS Debugging
        </a>
        <a href="https://hackerone.com/mycrypto" target="_blank" rel="noopener noreferrer">
          HackerOne
        </a>
        <a href="mailto:press@mycrypto.com" target="_blank" rel="noopener noreferrer">
          Press Inquiries
        </a>
      </div>
    </div>
    <div className="col-xs-12 col-md-4 col-lg-5 align-center">
      <div className="branding">
        <Link to="/">
          <img src={logo} alt="MyCrypto logo" />
        </Link>
      </div>
      <div className="about-links">
        <a href="https://mycrypto.com" target="_blank" rel="noopener noreferrer">
          MyCrypto.com
        </a>
        <a href="https://support.mycrypto.com" target="_blank" rel="noopener noreferrer">
          Help & Support
        </a>
        <a href="https://about.mycrypto.com" target="_blank" rel="noopener noreferrer">
          Our Team
        </a>
        <a href="https://about.mycrypto.com/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </div>
      <div className="about-text">
        MyCrypto is an open-source, client-side tool for generating ether wallets, handling ERC-20
        tokens, and interacting with the blockchain more easily. Developed by and for the community
        since 2015, we’re focused on building awesome products that put the power in people’s hands.
      </div>
      <div className="about-legal">
        <div className="about-legal-text">&copy; 2018 MyCrypto, Inc.</div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6 last-xs col-md-4  col-lg-3 align-right">
      <h5 className="support-title">Support Us & Our Friends</h5>
      <div className="support-affiliates">
        <a
          href="https://www.ledgerwallet.com/r/1985?path=/products/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy a Ledger Wallet
        </a>
        <a href="https://shop.trezor.io/?a=mycrypto.com" target="_blank" rel="noopener noreferrer">
          Buy a TREZOR
        </a>
        <a
          href="https://keepkey.go2cloud.org/aff_c?offer_id=1&aff_id=4086"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy a Keepkey
        </a>
        <a href="https://stee.ly/2Hcl4RE" target="_blank" rel="noopener noreferrer">
          Get a Steely
        </a>
        <a
          href="https://ether.cards/?utm_source=mycrypto&utm_medium=cpm&utm_campaign=site"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get an ether.card
        </a>
      </div>
      <div className="support-donate">
        <div className="support-donate-currency">Donate ETH</div>
        <div className="support-donate-address">0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520</div>
      </div>
      <div className="support-donate">
        <div className="support-donate-currency">Donate BTC</div>
        <div className="support-donate-address">32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3</div>
      </div>
      <div className="support-friends">
        <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
          MetaMask
        </a>
        <a href="https://infura.io/" target="_blank" rel="noopener noreferrer">
          Infura
        </a>
        <a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">
          Etherscan
        </a>
        <a href="https://etherchain.org/" target="_blank" rel="noopener noreferrer">
          Etherchain
        </a>
      </div>
    </div>*/}
  </div>
);

export default Footer;
