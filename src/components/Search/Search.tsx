import React, { ChangeEvent, FunctionComponent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import * as searchIcon from '../../assets/images/icons/search.svg';
import { useDispatch, useSelector } from '../../hooks';
import { search } from '../../store/search';
import breakpoint from '../../theme/breakpoints';

interface Props {
  compact: boolean;
  fullSize?: boolean;
}

const SearchContainer = styled.div<Props>`
  margin-left: auto;
  background: ${({ theme }) => theme.controlBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  max-width: ${({ fullSize }) => (fullSize ? '100%' : '30rem')};
  height: ${({ compact }) => (compact ? '37px' : '42px')};

  ${breakpoint('lg', 'max')`
    max-width: 100%;
    margin-top: 2.5rem;
  `};
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  text-indent: 44px;
  background: url(${searchIcon}) no-repeat 13px 13px;
  background-size: 17px;
  border: none;
  font-family: ${({ theme }) => theme.font};

  &:focus {
    outline: none;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

const Search: FunctionComponent<Props> = ({ compact, fullSize }) => {
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
    <SearchContainer compact={compact} fullSize={fullSize}>
      <SearchInput
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </SearchContainer>
  );
};

export default Search;
