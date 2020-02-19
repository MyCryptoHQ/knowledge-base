import React, { FunctionComponent, useMemo, useState } from 'react';
import { navigate } from 'gatsby';
import PageItem from '../PageItem';
import { Page } from '../../models/page';
import * as Fuse from 'fuse.js';
import { useSelector } from '../../hooks';
import Heading from '../ui/Heading';
import Section from '../ui/Section';

const fuse = new Fuse<Page>([], {
  keys: [
    {
      name: 'title',
      weight: 0.6
    },
    {
      name: 'description',
      weight: 0.2
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

/* tslint:disable */
const _paq: (string | boolean | number)[][] =
  (typeof window !== 'undefined' && (window as any)._paq) || [];
/* tslint:enable */

const SearchPage: FunctionComponent<Props> = ({ allPages }) => {
  const searchQuery = useSelector(state => state.search.searchQuery);
  const [results, setResults] = useState<Page[]>([]);

  useMemo(
    () => {
      fuse.setCollection(allPages);

      const searchResults = fuse.search(searchQuery, {
        limit: 15
      });

      _paq.push(['trackSiteSearch', searchQuery, false, searchResults.length]);

      setResults(searchResults);
    },
    [searchQuery]
  );

  if (searchQuery) {
    return (
      <>
        {results.length > 0 ? (
          <>
            <Heading as="h2">Results for "{searchQuery}"</Heading>
            {results.map(page => (
              <PageItem key={page.slug} page={page} />
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
