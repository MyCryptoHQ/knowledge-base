import React, { FunctionComponent } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Link from '../../components/Link';
import MetaData from '../../components/MetaData';
import Container from '../../components/ui/Container';
import Heading from '../../components/ui/Heading';
import PageContainer from '../../components/ui/PageContainer';
import Section from '../../components/ui/Section';
import SubHeader from '../../components/ui/SubHeader';
import Text from '../../components/ui/Text';

const ErrorPage: FunctionComponent = () => (
  <PageContainer>
    <MetaData title="Error · Contact us" noIndex={true} />

    <SubHeader>
      <Breadcrumbs breadcrumbs={[{ title: 'Contact us', slug: 'contact-us' }]} />
    </SubHeader>

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
  </PageContainer>
);

export default ErrorPage;
