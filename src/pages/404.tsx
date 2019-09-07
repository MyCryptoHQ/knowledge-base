import React, { FunctionComponent } from 'react';
import Header from '../components/Header';
import MetaData from '../components/MetaData';
import Breadcrumbs from '../components/Breadcrumbs';
import SubHeader from '../components/SubHeader';

const Error404: FunctionComponent = () => (
  <div className="full-width flex-wrapper">
    <MetaData title="Page not found" noIndex={true} />

    <Header />
    <SubHeader>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-10 col-gutter-lr">
            <Breadcrumbs parent={{ title: 'Page not found', slug: '404' }} />
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
);

export default Error404;
