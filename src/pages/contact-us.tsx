import { Container, SubHeading, Body } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Link, Page } from '../components';
import ContactForm from '../components/ContactForm';

const ContactUs: FunctionComponent = () => (
  <Page title="Contact us">
    <Container>
      <SubHeading>Contact us</SubHeading>
      <Body>
        Before you send us a message, please try searching the knowledge base first, or try{' '}
        <Link to="/general-knowledge/ethereum-blockchain/more-help-support-and-communities">
          this list of communities
        </Link>{' '}
        for more immediate help.
      </Body>
      <Body>
        Your information will be used only to improve our pages and to answer you. Your data will be processed by us,
        our hosting provider, and our support ticket provider. For more information have a look at our{' '}
        <Link to="https://about.mycrypto.com/privacy/" external={true} newTab={true}>
          privacy policy
        </Link>
        .
      </Body>
      <ContactForm />
    </Container>
  </Page>
);

export default ContactUs;
