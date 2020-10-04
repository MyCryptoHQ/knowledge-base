import { navigate } from 'gatsby';
import { FunctionComponent, useEffect } from 'react';
import { useSelector } from '../../hooks';
import { useElasticSearch } from '../../hooks/useElasticSearch';
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
  const searchQuery = useSelector(state => state.navigation.searchQuery);
  const { loading, results } = useElasticSearch(searchQuery);

  useEffect(() => {
    if (!loading) {
      _paq.push(['trackSiteSearch', searchQuery, false, results.length]);
    }
  }, [loading, searchQuery]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (searchQuery) {
    return (
      <>
        {results.length > 0 ? (
          <>
            <Heading as="h2">Results for "{searchQuery}"</Heading>
            {results.map(getPageResult).map(page => (
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
