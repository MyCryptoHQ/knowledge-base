import React, { FunctionComponent } from 'react';
import PageContainer from '../components/ui/PageContainer';
import MetaData from '../components/MetaData';
import SubHeader from '../components/ui/SubHeader';
import ContactForm from '../components/ContactForm';
import Breadcrumbs from '../components/Breadcrumbs';
import Heading from '../components/ui/Heading';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Text from '../components/ui/Text';
import Link from '../components/Link';

const ContactUs: FunctionComponent = () => (
  <PageContainer>
    <MetaData title="Contact us" />

    <SubHeader>
      <Breadcrumbs parent={{ title: 'Contact us', slug: 'contact-us' }} />
    </SubHeader>

    <Section>
      <Container>
        <Heading as="h2">Contact us</Heading>
        <Text>
          Before you send us a message, please try searching the knowledge base first or try{' '}
          <Link to="/general-knowledge/ethereum-blockchain/more-help-support-and-communities">
            this list of communities
          </Link>{' '}
          for more immediate help.
        </Text>
        <Text>
          Your information will be used only to improve our pages and to answer you. Your data will
          be processed by us, our hosting provider, and our support ticket provider. For more
          information have a look at our{' '}
          <Link to="https://about.mycrypto.com/privacy/" external={true} newTab={true}>
            privacy policy
          </Link>
          .
        </Text>
        <ContactForm />
      </Container>
    </Section>
  </PageContainer>
);

export default ContactUs;
