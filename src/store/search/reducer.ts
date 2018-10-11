import { Reducer } from 'redux';
import {
  SEARCH,
  SearchActions,
  SearchState,
  SET_SEARCH_INDEX,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TEXT,
  SET_SEARCHING
} from './types';

const INITIAL_STATE: SearchState = {
  searchText: '',
  searchQuery: '',
  searchIndex: '',
  searchResults: [],
  isSearching: false
};

const reducer: Reducer<SearchState, SearchActions> = (
  state: SearchState = INITIAL_STATE,
  action: SearchActions
): SearchState => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case SET_SEARCH_INDEX:
      return { ...state, searchIndex: action.payload };
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case SEARCH:
      return { ...state, searchQuery: state.searchText, searchText: '', isSearching: true };
    case SET_SEARCHING:
      return { ...state, isSearching: action.payload };
    default:
      return state;
  }
};

export default reducer;
