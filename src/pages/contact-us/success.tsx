import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import MetaData from '../../components/MetaData/MetaData';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Link from 'gatsby-link';

const SuccessPage: React.StatelessComponent = () => (
  <Layout>
    <div className="full-width">
      <MetaData title="Success · Contact us" noIndex={true} />

      <Header />
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
                <li>Success</li>
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
              <h3>Success!</h3>
              <p>Your message has been submitted.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default SuccessPage;
