import React, { FunctionComponent } from 'react';
import HorizontalRule from './HorizontalRule';
import VerticalRule from './VerticalRule';
import LogoBox from './LogoBox';
import DonateAndSubscribe from './DonateAndSubscribe';
import Linkset from './Linkset';
import SocialsAndLegal from './SocialsAndLegal';
import './Footer.scss';

const MobileFooter: FunctionComponent = () => (
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

const TabletFooter: FunctionComponent = () => (
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

const DesktopFooter: FunctionComponent = () => (
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

const Footer: FunctionComponent = () => (
  <div className="footer-row">
    <MobileFooter />
    <TabletFooter />
    <DesktopFooter />
  </div>
);

export default Footer;
