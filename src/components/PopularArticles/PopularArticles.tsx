import * as React from 'react';
import PageSelector from '../PageSelector/PageSelector';

const PopularArticles: React.StatelessComponent = () => (
  <div className="container">
    <div className="home row center-xs">
      <div className="col-xs-10">
        <section>
          <div className="row">
            <div className="col-xs col-gutter-lr">
              <h2>Popular Articles</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <PageSelector slug="how-to/getting-started/how-to-get-started-on-mycrypto" />
            </div>
            <div className="col-xs-12 col-md-6">
              <PageSelector slug="troubleshooting/tokens/adding-new-token-and-sending-custom-tokens" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <PageSelector slug="staying-safe/protecting-yourself-and-your-funds" />
            </div>
            <div className="col-xs-12 col-md-6">
              <PageSelector slug="general-knowledge/ethereum-blockchain/more-help-support-and-communities" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <PageSelector slug="staying-safe/hardware-wallet-recommendations" />
            </div>
            <div className="col-xs-12 col-md-6">
              <PageSelector slug="how-to/offline/how-to-run-mycrypto-offline-and-locally" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default PopularArticles;
