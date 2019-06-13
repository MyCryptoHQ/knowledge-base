import { Reducer } from 'redux';
import { SEARCH, SearchActions, SearchState, SET_SEARCH_TEXT } from './types';

const INITIAL_STATE: SearchState = {
  searchText: '',
  searchQuery: ''
};

const reducer: Reducer<SearchState, SearchActions> = (
  state: SearchState = INITIAL_STATE,
  action: SearchActions
): SearchState => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    case SEARCH:
      return {
        ...state,
        searchText: '',
        searchQuery: state.searchText
      };
    default:
      return state;
  }
};

export default reducer;
