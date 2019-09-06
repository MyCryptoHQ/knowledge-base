import React, { FunctionComponent, useEffect, useState } from 'react';
import DonationButton from './DonationButton';
import * as ether from '../../../assets/images/donate/ether.png';
import * as bitcoin from '../../../assets/images/donate/bitcoin.png';
import './DonateAndSubscribe.scss';

const DONATION_ADDRESSES = {
  Ethereum: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520',
  Bitcoin: '32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3'
};

const DonateAndSubscribe: FunctionComponent = () => {
  const [displayMessage, setDisplayMessage] = useState<boolean>();

  useEffect(
    () => {
      if (displayMessage) {
        const id = setTimeout(() => {
          setDisplayMessage(false);
        }, 3000);

        return () => clearTimeout(id);
      }
    },
    [displayMessage]
  );

  const handleDisplayMessage = () => {
    setDisplayMessage(true);
  };

  return (
    <div className="donate-and-subscribe">
      <div className="donate">
        <h2>Donate</h2>
        <div className="donate-buttons">
          <DonationButton
            text={DONATION_ADDRESSES.Ethereum}
            icon={ether}
            title="Ethereum"
            onCopy={handleDisplayMessage}
          />
          <DonationButton
            text={DONATION_ADDRESSES.Bitcoin}
            icon={bitcoin}
            title="Bitcoin"
            onCopy={handleDisplayMessage}
          />
        </div>
        {displayMessage && (
          <p className="donate-buttons-message">
            <span className="check">✓</span>
            Address Copied to Clipboard!
          </p>
        )}
      </div>
    </div>
  );
};

export default DonateAndSubscribe;
