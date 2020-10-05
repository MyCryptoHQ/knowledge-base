import fetch from 'isomorphic-unfetch';
import { useMemo, useState } from 'react';
import { ELASTIC_ENDPOINT } from '../config/search';
import { SearchResult } from '../types/page';

interface SearchResponse {
  timed_out: boolean;
  hits: {
    total: {
      value: number;
    };
    hits: Array<{
      _source: SearchResult;
    }>;
  };
}

type SearchFunction = (query: string) => void;

/**
 * A hook to use ElasticSearch to query for articles.
 *
 * @param {string} query
 * @return {{ loading: boolean, results: SearchResult[] }}
 */
export const useElasticSearch = (): { search: SearchFunction; loading: boolean; results: SearchResult[] } => {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<SearchResult[]>([]);

  useMemo(() => {
    setLoading(true);

    // ElasticSearch supports GET requests for search, but the JS fetch API doesn't support bodies on GET requests
    fetch(ELASTIC_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    })
      .then((response) => response.json())
      .then((json: SearchResponse) => setResults(json.hits.hits.map((hit) => hit._source)))
      .catch(() => setResults([]))
      .finally(() => setLoading(false));
  }, [query]);

  return {
    search: setQuery,
    loading,
    results
  };
};
