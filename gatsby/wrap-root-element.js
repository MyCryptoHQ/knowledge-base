import React from 'react';
import SearchProvider from '../src/components/Search/SearchProvider';

/**
 * All providers should be used in this file, so they work properly in combination with Gatsby.
 */
export const wrapRootElement = ({ element }) => {
  return <SearchProvider>{element}</SearchProvider>;
};
