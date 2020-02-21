import { Reducer } from 'redux';
import { NavigationState, SEARCH, SearchActions, SET_DRAWER_OPEN, SET_SEARCH_TEXT } from './types';

const INITIAL_STATE: NavigationState = {
  searchText: '',
  searchQuery: '',
  isDrawerOpen: false
};

const reducer: Reducer<NavigationState, SearchActions> = (
  state: NavigationState = INITIAL_STATE,
  action: SearchActions
): NavigationState => {
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
        searchQuery: state.searchText,
        isDrawerOpen: false
      };
    case SET_DRAWER_OPEN:
      return {
        ...state,
        isDrawerOpen: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
