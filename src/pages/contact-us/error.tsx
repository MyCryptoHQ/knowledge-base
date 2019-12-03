import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import MetaData from '../../components/MetaData/MetaData';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Link from 'gatsby-link';
import ExternalLink from '../../components/ExternalLink/ExternalLink';
import Banner from '../../components/ui/Banner/Banner';

const ErrorPage: React.StatelessComponent = () => (
  <Layout>
    <div className="full-width">
      <MetaData title="Error · Contact us" noIndex={true} />

      <Header />
      <Banner>
        <span>
          NEW! Join <ExternalLink to="https://winter.mycrypto.com">#MyCryptoWinter</ExternalLink> to
          learn the latest support tips and tricks and win prizes! Head over to{' '}
          <ExternalLink to="https://winter.mycrypto.com">winter.mycrypto.com</ExternalLink>
        </span>
      </Banner>
      <SubHeader>
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-10 col-gutter-lr">
              <div className="breadcrumbs">
                <li>
                  <Link to="/">Knowledge Base</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>
                <li>Error</li>
              </div>
            </div>
          </div>
        </div>
      </SubHeader>

      <div className="container">
        <div className="category row center-xs">
          <div className="col-xs-10 col-md-6 col-gutter-lr">
            <section>
              <h2>Contact us</h2>
              <h3>Error</h3>
              <p>Oops, your request could not be fulfilled.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ErrorPage;
