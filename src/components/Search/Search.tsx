import React, { ChangeEvent, FunctionComponent, KeyboardEvent } from 'react';
import { navigate } from 'gatsby';
import { useDispatch, useSelector } from '../../hooks';
import { search } from '../../store/search';
import './Search.scss';

interface Props {
  compact: boolean;
}

const Search: FunctionComponent<Props> = ({ compact }) => {
  const searchText = useSelector(state => state.search.searchText);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(search());
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
        value={searchText}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Search;
