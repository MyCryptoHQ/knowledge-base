import { FunctionComponent } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaData from '../components/MetaData';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import PageContainer from '../components/ui/PageContainer';
import Section from '../components/ui/Section';
import SubHeader from '../components/ui/SubHeader';
import Text from '../components/ui/Text';

const Error404: FunctionComponent = () => (
  <PageContainer>
    <MetaData title="Page not found" noIndex={true} />

    <SubHeader>
      <Breadcrumbs breadcrumbs={[{ title: 'Page not found', slug: '404' }]} />
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
