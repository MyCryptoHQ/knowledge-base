import { navigate } from 'gatsby';
import { FunctionComponent, useMemo, useState } from 'react';
import { useSelector } from '../../hooks';
import { Mdx } from '../../types/page';
import PageItem from '../PageItem';
import Heading from '../ui/Heading';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const _paq: Array<Array<string | boolean | number>> = (typeof window !== 'undefined' && (window as any)._paq) || [];

const SearchPage: FunctionComponent = () => {
  const searchQuery = useSelector(state => state.navigation.searchQuery);
  const [results, setResults] = useState<Mdx[]>([]);

  // TODO
  useMemo(() => {
    // _paq.push(['trackSiteSearch', searchQuery, false, searchResults.length]);

    setResults([]);
  }, [searchQuery]);

  if (searchQuery) {
    return (
      <>
        {results.length > 0 ? (
          <>
            <Heading as="h2">Results for "{searchQuery}"</Heading>
            {results.map((page) => (
              <PageItem key={page.slug} page={page} showReadMore={true} />
            ))}
          </>
        ) : (
          <Heading as="h2">Sorry, there are no results for "{searchQuery}"</Heading>
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
