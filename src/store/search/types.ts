import { Action } from 'redux';

export interface SearchState {
  searchText: string;
  searchQuery: string;
}

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export const SEARCH = 'SEARCH';

export interface SetSearchTextAction extends Action {
  type: typeof SET_SEARCH_TEXT;
  payload: string;
}

export interface SearchAction extends Action {
  type: typeof SEARCH;
}

export type SearchActions = SetSearchTextAction | SearchAction;
