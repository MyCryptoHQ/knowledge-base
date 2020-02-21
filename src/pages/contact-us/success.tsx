import React, { FunctionComponent } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import MetaData from '../../components/MetaData';
import PageContainer from '../../components/ui/PageContainer';
import SubHeader from '../../components/ui/SubHeader';

const SuccessPage: FunctionComponent = () => (
  <PageContainer>
    <MetaData title="Success · Contact us" noIndex={true} />

    <SubHeader>
      <Breadcrumbs parent={{ title: 'Contact us', slug: 'contact-us' }} />
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
  </PageContainer>
);

export default SuccessPage;
