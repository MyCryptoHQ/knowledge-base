import { navigate } from 'gatsby';
import { ChangeEvent, FunctionComponent, KeyboardEvent } from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import searchIcon from '../../assets/images/icons/search.svg';
import { useDispatch, useSelector } from '../../hooks';
import { search } from '../../store/navigation';
import breakpoint from '../../theme/breakpoints';
import Input from '../ui/Input';

interface Props {
  compact: boolean;
  maxWidth?: string;
}

const SearchContainer = styled.div<Props>`
  background: ${({ theme }) => theme.controlBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  max-width: ${({ maxWidth = '30rem' }) => maxWidth};
  height: ${({ compact }) => (compact ? '3.9rem' : '4.2rem')};
  margin: 0 2.5rem;

  ${breakpoint('lg', 'max')`
    max-width: 100%;
    margin-top: 2.5rem;
  `};
`;

const SearchInput = styled(Input as AnyStyledComponent)`
  width: 100%;
  min-width: 30rem;
  height: 100%;
  min-height: 100%;

  ${breakpoint('lg', 'max')`
    min-width: auto;
    width: auto;
  `};

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`;

const Search: FunctionComponent<Props> = ({ compact, maxWidth }) => {
  const searchText = useSelector((state) => state.navigation.searchText);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchText) {
      const query = searchText;
      dispatch(search());
      navigate(`/search/?query=${encodeURI(query)}`);
    }
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
    <SearchContainer compact={compact} maxWidth={maxWidth}>
      <SearchInput
        icon={searchIcon}
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        aria-label="Search"
      />
    </SearchContainer>
  );
};

export default Search;
