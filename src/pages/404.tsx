import React, { FunctionComponent } from 'react';
import PageContainer from '../components/ui/PageContainer';
import MetaData from '../components/MetaData';
import Breadcrumbs from '../components/Breadcrumbs';
import SubHeader from '../components/ui/SubHeader';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';

const Error404: FunctionComponent = () => (
  <PageContainer>
    <MetaData title="Page not found" noIndex={true} />

    <SubHeader>
      <Breadcrumbs parent={{ title: 'Page not found', slug: '404' }} />
    </SubHeader>

    <Section>
      <Container>
        <Heading as="h2">Page not found</Heading>
        <Text>The page you are looking for could not be found.</Text>
      </Container>
    </Section>
  </PageContainer>
);

export default Error404;
