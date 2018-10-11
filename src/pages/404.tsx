import * as React from 'react';
import Header from '../components/Header/Header';
import MetaData from '../components/MetaData/MetaData';
import Layout from '../components/Layout/Layout';

const Error404: React.StatelessComponent = () => (
  <Layout className="page-404" hideFooter={true}>
    <div className="full-width flex-wrapper">
      <MetaData title="Page not found" noIndex={true} />

      <Header specialLogo={true} />

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
