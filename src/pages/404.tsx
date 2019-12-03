import * as React from 'react';
import Header from '../components/Header/Header';
import MetaData from '../components/MetaData/MetaData';
import Layout from '../components/Layout/Layout';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import SubHeader from '../components/SubHeader/SubHeader';
import ExternalLink from '../components/ExternalLink/ExternalLink';
import Banner from '../components/ui/Banner/Banner';

const Error404: React.StatelessComponent = () => (
  <Layout>
    <div className="full-width flex-wrapper">
      <MetaData title="Page not found" noIndex={true} />

      <Header />
      <Banner>
        <span>
          NEW! Join <ExternalLink to="https://winter.mycrypto.com">#MyCryptoWinter</ExternalLink> to
          learn the latest support tips and tricks and win prizes! Head over to{' '}
          <ExternalLink to="https://winter.mycrypto.com">winter.mycrypto.com</ExternalLink>.
        </span>
      </Banner>
      <SubHeader>
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-10 col-gutter-lr">
              <Breadcrumbs breadcrumbs={[{ title: 'Page not found', slug: '/404' }]} />
            </div>
          </div>
        </div>
      </SubHeader>

      <div className="row middle-xs center-xs full-height">
        <div className="col-xs-10 col-gutter-lr">
          <section className="align-center">
            <h2>Page not found</h2>
            <p>The page you are looking for could not be found.</p>
          </section>
        </div>
      </div>
    </div>
  </Layout>
);

export default Error404;
