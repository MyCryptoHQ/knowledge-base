import { FunctionComponent } from 'react';
import { Link, Page, Section } from '../../components';
import Container from '../../components/ui/Container';
import Heading from '../../components/ui/Heading';
import Text from '../../components/ui/Text';

const ErrorPage: FunctionComponent = () => (
  <Page title="Error · Contact us" noIndex={true}>
    <Section>
      <Container>
        <Heading as="h2">Contact us</Heading>
        <Heading as="h3">Error</Heading>
        <Text>
          An error occurred while sending your message. Please <Link to="/contact-us">try again</Link> or send us an
          email at{' '}
          <Link to="mailto:support@mycrypto.com" external={true}>
            support@mycrypto.com
          </Link>
        </Text>
      </Container>
    </Section>
  </Page>
);

export default ErrorPage;
