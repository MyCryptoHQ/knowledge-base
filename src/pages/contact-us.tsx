import { FunctionComponent } from 'react';
import { Link, Page, Section } from '../components';
import ContactForm from '../components/ContactForm';
import Alert from '../components/ui/Alert';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';

const ContactUs: FunctionComponent = () => (
  <Page title="Contact us">
    <Section>
      <Container>
        <Heading as="h2">Contact us</Heading>
        <Text>
          Before you send us a message, please try searching the knowledge base first, or try{' '}
          <Link to="/general-knowledge/ethereum-blockchain/more-help-support-and-communities">
            this list of communities
          </Link>{' '}
          for more immediate help.
        </Text>
        <Text>
          Your information will be used only to improve our pages and to answer you. Your data will be processed by us,
          our hosting provider, and our support ticket provider. For more information have a look at our{' '}
          <Link to="https://about.mycrypto.com/privacy/" external={true} newTab={true}>
            privacy policy
          </Link>
          .
        </Text>
        <Alert>
          <Text>
            <strong>The network is very busy currently, causing the average gas prices to go up a lot.</strong> If your
            transaction is <strong>pending</strong> or <strong>stuck</strong>, please refer to this article:{' '}
            <Link to="/how-to/sending/checking-or-replacing-a-transaction-after-it-has-been-sent">
              How To Cancel or Replace a Stuck Transaction
            </Link>
          </Text>
        </Alert>
        <ContactForm />
      </Container>
    </Section>
  </Page>
);

export default ContactUs;
