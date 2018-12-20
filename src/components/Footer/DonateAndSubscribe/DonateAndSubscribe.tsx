import * as React from 'react';
import DonationButton from './DonationButton/DonationButton';
import * as ether from '../../../assets/images/donate/ether.png';
import * as bitcoin from '../../../assets/images/donate/bitcoin.png';
import './DonateAndSubscribe.scss';

interface State {
  displayMessage: boolean;
  timerId?: number;
}

const DONATION_ADDRESSES = {
  Ethereum: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520',
  Bitcoin: '32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3'
};

export default class DonateAndSubscribe extends React.PureComponent<{}, State> {
  state: State = {
    displayMessage: false,
    timerId: -1
  };

  render() {
    const { displayMessage } = this.state;

    return (
      <div className="donate-and-subscribe">
        <div className="donate">
          <h2>Donate</h2>
          <div className="donate-buttons">
            <DonationButton
              text={DONATION_ADDRESSES.Ethereum}
              icon={ether}
              title="Ethereum"
              onCopy={this.displayMessage}
            />
            <DonationButton
              text={DONATION_ADDRESSES.Bitcoin}
              icon={bitcoin}
              title="Bitcoin"
              onCopy={this.displayMessage}
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
  }

  private displayMessage = (): void => {
    clearTimeout(this.state.timerId);

    const timerId: number = setTimeout(() => {
      this.setState({
        displayMessage: false
      });
    }, 3000) as any;

    this.setState({
      displayMessage: true,
      timerId
    });
  };
}
