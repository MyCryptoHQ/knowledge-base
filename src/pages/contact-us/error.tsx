import { Container, SubHeading, Body } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Link, Page } from '../../components';

const ErrorPage: FunctionComponent = () => (
  <Page title="Error · Contact us" noIndex={true}>
    <Container>
      <SubHeading>Contact us</SubHeading>
      <SubHeading as="h3">Error</SubHeading>
      <Body>
        An error occurred while sending your message. Please <Link to="/contact-us">try again</Link> or send us an email
        at{' '}
        <Link to="mailto:support@mycrypto.com" external={true}>
          support@mycrypto.com
        </Link>
      </Body>
    </Container>
  </Page>
);

export default ErrorPage;
