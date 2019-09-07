import React, { FunctionComponent } from 'react';
import MetaData from '../components/MetaData';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';
import { Link } from 'gatsby';
import Breadcrumbs from '../components/Breadcrumbs';

const ContactUs: FunctionComponent = () => (
  <div className="full-width">
    <MetaData title="Contact us" />

    <Header />
    <SubHeader>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-10 col-gutter-lr">
            <Breadcrumbs parent={{ title: 'Contact us', slug: 'contact-us' }} />
          </div>
        </div>
      </div>
    </SubHeader>

    <div className="container">
      <div className="category row center-xs">
        <div className="col-xs-10 col-md-6 col-gutter-lr">
          <section>
            <h2>Contact us</h2>
            <p>
              Before you send us a message, please try searching the knowledge base first or try{' '}
              <Link to="/general-knowledge/ethereum-blockchain/more-help-support-and-communities">
                this list of communities
              </Link>{' '}
              for more immediate help.
            </p>
            <p>
              Your information will be used only to improve our pages and to answer you. Your data
              will be processed by us, our hosting provider, and our support ticket provider. For
              more information have a look at our{' '}
              <a
                href="https://about.mycrypto.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
              </a>
              .
            </p>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;
