import { FunctionComponent } from 'react';
import { Page, Section } from '../components';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';

const Error404: FunctionComponent = () => (
  <Page title="Page not found" noIndex={true}>
    <Section>
      <Container>
        <Heading as="h2">Page not found</Heading>
        <Text>The page you are looking for could not be found.</Text>
      </Container>
    </Section>
  </Page>
);

export default Error404;
