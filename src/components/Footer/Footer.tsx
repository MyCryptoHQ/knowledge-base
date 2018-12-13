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
  </div>
);

export default Footer;
