import React, { FunctionComponent, useContext, useMemo, useState } from 'react';
import { SearchContext } from '../SearchState';
import PageItem from '../../PageItem/PageItem';
import { Page } from '../../../models/page';
import * as Fuse from 'fuse.js';
import { navigate } from 'gatsby';

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

const SearchPage: FunctionComponent<Props> = ({ allPages }) => {
  const [store] = useContext(SearchContext);
  const [results, setResults] = useState<Page[]>([]);

  useMemo(
    () => {
      fuse.setCollection(allPages);

      const searchResults = fuse.search(store.searchQuery, {
        limit: 15
      });

      window._paq.push(['trackSiteSearch', store.searchQuery, false, searchResults.length]);

      setResults(searchResults);
    },
    [store.searchQuery]
  );

  if (store.searchQuery) {
    return (
      <section>
        {results.length > 0 ? (
          <div>
            <h2>Results for "{store.searchQuery}"</h2>
            {results.map(page => (
              <PageItem key={page.slug} page={page} />
            ))}
          </div>
        ) : (
          <h2>Sorry, there are no results for "{store.searchQuery}"</h2>
        )}
      </section>
    );
  }

  // Prevent manually navigating to /search
  navigate('/');
  return null;
};

export default SearchPage;
