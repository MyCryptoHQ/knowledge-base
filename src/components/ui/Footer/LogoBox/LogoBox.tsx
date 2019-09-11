import React, { FunctionComponent } from 'react';
import * as logo from '../../../../assets/images/logo-2.svg';
import SocialsAndLegal from '../SocialsAndLegal';
import './LogoBox.scss';

const LogoBox: FunctionComponent = () => (
  <div className="logo-box">
    <div className="logo-box-image">
      <img src={logo} alt="Logo" />
    </div>
    <div className="logo-box-text">
      <p>
        MyCrypto is an open-source, client-side tool for generating ether wallets, handling ERC-20
        tokens, and interacting with the blockchain more easily. Developed by and for the community
        since 2015, we’re focused on building awesome products that put the power in people’s hands.
      </p>
    </div>
    <div className="logo-box-socials-legal">
      <SocialsAndLegal />
    </div>
  </div>
);

export default LogoBox;
