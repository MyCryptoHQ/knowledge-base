import React, { FunctionComponent } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import MetaData from '../../components/MetaData';
import Container from '../../components/ui/Container';
import Heading from '../../components/ui/Heading';
import PageContainer from '../../components/ui/PageContainer';
import Section from '../../components/ui/Section';
import SubHeader from '../../components/ui/SubHeader';
import Text from '../../components/ui/Text';

const SuccessPage: FunctionComponent = () => (
  <PageContainer>
    <MetaData title="Success · Contact us" noIndex={true} />

    <SubHeader>
      <Breadcrumbs parent={{ title: 'Contact us', slug: 'contact-us' }} />
    </SubHeader>

    <Section>
      <Container>
        <Heading as="h2">Contact us</Heading>
        <Heading as="h3">Success!</Heading>
        <Text>Your message has been sent. We will get back to you as soon as possible!</Text>
      </Container>
    </Section>
  </PageContainer>
);

export default SuccessPage;
