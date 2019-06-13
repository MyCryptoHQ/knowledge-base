import React, { FunctionComponent, useMemo, useState } from 'react';
import PageItem from '../../PageItem/PageItem';
import { Page } from '../../../models/page';
import * as Fuse from 'fuse.js';
import { navigate } from 'gatsby';
import { useSelector } from '../../../hooks';

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
      name: 'excerpt',
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
      <section>
        {results.length > 0 ? (
          <div>
            <h2>Results for "{searchQuery}"</h2>
            {results.map(page => (
              <PageItem key={page.slug} page={page} />
            ))}
          </div>
        ) : (
          <h2>Sorry, there are no results for "{searchQuery}"</h2>
        )}
      </section>
    );
  }

  if (typeof window !== 'undefined') {
    // Prevent manually navigating to /search
    navigate('/');
  }

  return null;
};

export default SearchPage;
