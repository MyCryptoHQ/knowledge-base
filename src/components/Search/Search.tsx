import React, { ChangeEvent, FunctionComponent, KeyboardEvent, useContext } from 'react';
import { SearchContext } from './SearchState';
import { navigate } from 'gatsby';
import './Search.scss';

interface Props {
  compact: boolean;
}

const Search: FunctionComponent<Props> = ({ compact }) => {
  const [store, dispatch] = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: 'SEARCH' });
    navigate('/search');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_SEARCH_TEXT',
      payload: event.target.value
    });
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`search ${compact ? 'compact' : ''}`}>
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        value={store.searchText}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Search;
