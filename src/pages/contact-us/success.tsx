import { Body, Container, SubHeading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Page } from '../../components';

const SuccessPage: FunctionComponent = () => (
  <Page title="Success · Contact us" noIndex={true}>
    <Container>
      <SubHeading>Contact us</SubHeading>
      <SubHeading as="h3">Success!</SubHeading>
      <Body>Your message has been sent. We will get back to you as soon as possible!</Body>
    </Container>
  </Page>
);

export default SuccessPage;
