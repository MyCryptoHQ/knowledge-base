import { useMemo, useState } from 'react';
import { ELASTIC_ENDPOINT, ELASTIC_INDEX } from '../config/search';
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

/**
 * A hook to use ElasticSearch to query for articles.
 *
 * @param {string} query
 * @return {{ loading: boolean, results: SearchResult[] }}
 */
export const useElasticSearch = (query: string): { loading: boolean; results: SearchResult[] } => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  useMemo(() => {
    setLoading(true);

    // ElasticSearch supports GET requests for search, but the JS fetch API doesn't support bodies on GET requests
    fetch(`${ELASTIC_ENDPOINT}/${ELASTIC_INDEX}/_search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _source: ['slug', 'title', 'excerpt'],
        min_score: 2,
        query: {
          multi_match: {
            query,
            fields: ['title', 'content'],
            fuzziness: 'AUTO'
          }
        }
      })
    })
      .then(response => response.json())
      .then((json: SearchResponse) => setResults(json.hits.hits.map(hit => hit._source)))
      .catch(() => setResults([]))
      .finally(() => setLoading(false));
  }, [query]);

  return {
    loading,
    results
  };
};
