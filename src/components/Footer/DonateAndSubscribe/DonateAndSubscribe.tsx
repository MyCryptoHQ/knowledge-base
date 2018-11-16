import * as React from 'react';
import * as CopyToClipboard from 'react-copy-to-clipboard';
import DonationButton from './DonationButton/DonationButton';
import Subscribe from './Subscribe/Subscribe';
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
    return (
      <div className="donate-and-subscribe">
        <div className="donate">
          <h2>Donate</h2>
          <div className="donate-buttons">
            <CopyToClipboard text={DONATION_ADDRESSES.Ethereum} onCopy={this.displayMessage}>
              <DonationButton icon={ether} title="Ethereum" />
            </CopyToClipboard>
            <CopyToClipboard text={DONATION_ADDRESSES.Bitcoin} onCopy={this.displayMessage}>
              <DonationButton icon={bitcoin} title="Bitcoin" />
            </CopyToClipboard>
          </div>
        </div>
        <Subscribe />
      </div>
    );
  }

  private displayMessage = (): void => {
    console.log('a');

    clearTimeout(this.state.timerId);

    const timerId = setTimeout(() => {
      this.setState({
        displayMessage: false
      });
    });

    this.setState({
      displayMessage: true,
      timerId
    });
  };
}
