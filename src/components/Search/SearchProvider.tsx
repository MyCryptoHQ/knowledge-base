import React, { FunctionComponent, useReducer } from 'react';
import { INITIAL_STATE, SearchContext, SearchReducer } from './SearchState';

const SearchProvider: FunctionComponent = ({ children }) => {
  const [store, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return <SearchContext.Provider value={[store, dispatch]}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
