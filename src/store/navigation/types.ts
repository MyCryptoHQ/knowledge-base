import { Action } from 'redux';

export interface NavigationState {
  searchText: string;
  searchQuery: string;
  isDrawerOpen: boolean;
}

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SEARCH = 'SEARCH';
export const SET_DRAWER_OPEN = 'SET_DRAWER_OPEN';

export interface SetSearchTextAction extends Action {
  type: typeof SET_SEARCH_TEXT;
  payload: string;
}

export interface SearchAction extends Action {
  type: typeof SEARCH;
}

export interface SetDrawerOpenAction extends Action {
  type: typeof SET_DRAWER_OPEN;
  payload: boolean;
}

export type SearchActions = SetSearchTextAction | SearchAction | SetDrawerOpenAction;
