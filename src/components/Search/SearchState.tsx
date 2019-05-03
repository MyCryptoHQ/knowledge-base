import { createContext, Dispatch, Reducer } from 'react';

export const INITIAL_STATE = {
  searchText: '',
  searchQuery: ''
};

export type SearchState = typeof INITIAL_STATE;

interface Action {
  type: string;
}

interface SetSearchTextAction extends Action {
  type: 'SET_SEARCH_TEXT';
  payload: string;
}

interface SearchAction extends Action {
  type: 'SEARCH';
}

type SearchActions = SetSearchTextAction | SearchAction;

export const SearchReducer: Reducer<SearchState, SearchActions> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload
      };
    case 'SEARCH':
      return {
        ...state,
        searchText: '',
        searchQuery: state.searchText
      };
    default:
      return state;
  }
};

export const SearchContext = createContext<[SearchState, Dispatch<SearchActions>]>(null as any);
