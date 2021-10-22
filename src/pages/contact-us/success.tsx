import { FunctionComponent } from 'react';
import { Page, Section } from '../../components';
import Container from '../../components/ui/Container';
import Heading from '../../components/ui/Heading';
import Text from '../../components/ui/Text';

const SuccessPage: FunctionComponent = () => (
  <Page title="Success · Contact us" noIndex={true}>
    <Section>
      <Container>
        <Heading as="h2">Contact us</Heading>
        <Heading as="h3">Success!</Heading>
        <Text>Your message has been sent. We will get back to you as soon as possible!</Text>
      </Container>
    </Section>
  </Page>
);

export default SuccessPage;
