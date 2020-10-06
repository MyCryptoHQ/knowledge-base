import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import { parse } from 'query-string';
import { FunctionComponent, useEffect } from 'react';
import { useElasticSearch } from '../../hooks';
import { PageResult, SearchResult } from '../../types/page';
import PageItem from '../PageItem';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _paq: Array<Array<string | boolean | number>> = (typeof window !== 'undefined' && (window as any)._paq) || [];

const getPageResult = (result: SearchResult): PageResult => ({
  slug: result.slug,
  excerpt: result.excerpt,
  frontmatter: {
    title: result.title
  }
});

const SearchPage: FunctionComponent = () => {
  const location = useLocation();
  const { search, loading, results } = useElasticSearch();

  const searchQuery = parse(location.search).query as string;

  useEffect(() => {
    search(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (!loading && results) {
      _paq.push(['trackSiteSearch', searchQuery, false, results.length]);
    }
  }, [loading, results]);

  if (loading || !results) {
    return (
      <>
        <Heading as="h2">Results for "{searchQuery}"</Heading>
        <Text>Loading...</Text>
      </>
    );
  }

  if (searchQuery) {
    return (
      <>
        {results.length > 0 ? (
          <>
            <Heading as="h2">Results for "{searchQuery}"</Heading>
            {results.map(getPageResult).map((page) => (
              <PageItem key={page.slug} page={page} showReadMore={true} />
            ))}
          </>
        ) : (
          <>
            <Heading as="h2">Sorry, there are no results for "{searchQuery}"</Heading>
            <Text>Please try another search query.</Text>
          </>
        )}
      </>
    );
  }

  if (typeof window !== 'undefined') {
    // Prevent manually navigating to /search
    navigate('/');
  }

  return null;
};

export default SearchPage;
