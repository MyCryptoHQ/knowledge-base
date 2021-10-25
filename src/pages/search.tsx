import { Container } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Page, Section } from '../components';
import SearchPage from '../components/SearchPage';

const Search: FunctionComponent = () => (
  <Page title="Search" noIndex={true}>
    <Section>
      <Container>
        <SearchPage />
      </Container>
    </Section>
  </Page>
);

export default Search;
