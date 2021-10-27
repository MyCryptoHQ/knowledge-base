import { Trans } from '@lingui/macro';
import { Body, Box, Button, Spinner, SubHeading } from '@mycrypto/ui';
import { FunctionComponent, useEffect } from 'react';
import { useElasticSearch } from '../hooks';
import { Link } from './Link';

export interface ResultsProps {
  query: string;
}

export const Results: FunctionComponent<ResultsProps> = ({ query }) => {
  const { search, loading, results } = useElasticSearch();

  useEffect(() => {
    search(query);
  }, [query]);

  useEffect(() => {
    if (!loading && results) {
      window._paq?.push(['trackSiteSearch', query, false, results.length]);
    }
  }, [loading, results]);

  if (loading || !results) {
    return <Spinner size={2} color="spinner" />;
  }

  return (
    <>
      {results.map((result) => (
        <Box key={`result-${result.slug}`} marginBottom="4">
          <SubHeading as="h3" color="text.primary">
            {result.title}
          </SubHeading>
          <Body marginBottom="3">{result.excerpt}</Body>
          <Link to={`/${result.slug}`}>
            <Button>
              <Trans>Read Now</Trans>
            </Button>
          </Link>
        </Box>
      ))}
    </>
  );
};
