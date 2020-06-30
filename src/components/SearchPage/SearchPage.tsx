import Fuse from 'fuse.js';
import { navigate } from 'gatsby';
import React, { FunctionComponent, useMemo, useState } from 'react';
import { useSelector } from '../../hooks';
import { Page } from '../../models/page';
import PageItem from '../PageItem';
import Heading from '../ui/Heading';

const fuse = new Fuse<Page, Record<string, unknown>>([], {
  keys: [
    {
      name: 'title',
      weight: 0.3
    },
    {
      name: 'description',
      weight: 0.1
    },
    {
      name: 'tags',
      weight: 0.4
    },
    {
      name: 'childMdx.excerpt',
      weight: 0.2
    }
  ],
  shouldSort: true,
  location: 0,
  threshold: 0.6
});

interface Props {
  allPages: Page[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _paq: Array<Array<string | boolean | number>> = (typeof window !== 'undefined' && (window as any)._paq) || [];

const SearchPage: FunctionComponent<Props> = ({ allPages }) => {
  const searchQuery = useSelector(state => state.navigation.searchQuery);
  const [results, setResults] = useState<Page[]>([]);

  useMemo(() => {
    fuse.setCollection(allPages);

    const searchResults = fuse.search(searchQuery, {
      limit: 10
    });

    _paq.push(['trackSiteSearch', searchQuery, false, searchResults.length]);

    setResults(searchResults);
  }, [searchQuery]);

  if (searchQuery) {
    return (
      <>
        {results.length > 0 ? (
          <>
            <Heading as="h2">Results for "{searchQuery}"</Heading>
            {results.map(page => (
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
