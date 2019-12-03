import * as React from 'react';
import Layout from '../components/Layout/Layout';
import MetaData from '../components/MetaData/MetaData';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import Link from 'gatsby-link';
import ContactForm from '../components/ContactForm/ContactForm';
import ExternalLink from '../components/ExternalLink/ExternalLink';
import Banner from '../components/ui/Banner/Banner';

const ContactUs: React.StatelessComponent = () => (
  <Layout>
    <div className="full-width">
      <MetaData title="Contact us" />

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
              <div className="breadcrumbs">
                <li>
                  <Link to="/">Knowledge Base</Link>
                </li>
                <li>Contact us</li>
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
  </Layout>
);

export default ContactUs;
