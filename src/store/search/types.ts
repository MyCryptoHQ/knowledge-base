import { Action } from 'redux';

export interface SearchState {
  searchText: string;
  searchQuery: string;
  searchIndex: string;
  searchResults: { ref: string }[];
  isSearching: boolean;
}

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export const SET_SEARCH_INDEX = 'SET_SEARCH_INDEX';

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const SEARCH = 'SEARCH';

export const SET_SEARCHING = 'SET_SEARCHING';

export interface SetSearchTextAction extends Action {
  type: typeof SET_SEARCH_TEXT;
  payload: string;
}

export interface SetSearchIndexAction extends Action {
  type: typeof SET_SEARCH_INDEX;
  payload: string;
}

export interface SetSearchResultsAction extends Action {
  type: typeof SET_SEARCH_RESULTS;
  payload: { ref: string }[];
}

export interface SearchAction extends Action {
  type: typeof SEARCH;
}

export interface SetSearchingAction {
  type: typeof SET_SEARCHING;
  payload: boolean;
}

export type SearchActions =
  | SetSearchTextAction
  | SetSearchIndexAction
  | SetSearchResultsAction
  | SearchAction
  | SetSearchingAction;
