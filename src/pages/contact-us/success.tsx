import React, { FunctionComponent } from 'react';
import MetaData from '../../components/MetaData';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import { Link } from 'gatsby';

const SuccessPage: FunctionComponent = () => (
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
);

export default SuccessPage;
