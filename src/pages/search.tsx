import { FunctionComponent } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaData from '../components/MetaData';
import SearchPage from '../components/SearchPage';
import Container from '../components/ui/Container';
import PageContainer from '../components/ui/PageContainer';
import Section from '../components/ui/Section';
import SubHeader from '../components/ui/SubHeader';

const Search: FunctionComponent = () => (
  <PageContainer>
    <MetaData title="Search" noIndex={true} />

    <SubHeader>
      <Breadcrumbs breadcrumbs={[{ title: 'Search', slug: 'search' }]} />
    </SubHeader>

    <Section>
      <Container>
        <SearchPage />
      </Container>
    </Section>
  </PageContainer>
);

export default Search;
