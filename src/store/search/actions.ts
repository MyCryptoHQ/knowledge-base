import { ActionCreator } from 'redux';
import {
  SEARCH,
  SearchAction,
  SET_SEARCH_INDEX,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TEXT,
  SET_SEARCHING,
  SetSearchIndexAction,
  SetSearchingAction,
  SetSearchResultsAction,
  SetSearchTextAction
} from './types';

export const setSearchText: ActionCreator<SetSearchTextAction> = (searchText: string) => ({
  type: SET_SEARCH_TEXT,
  payload: searchText
});

export const setSearchIndex: ActionCreator<SetSearchIndexAction> = (index: string) => ({
  type: SET_SEARCH_INDEX,
  payload: index
});

export const setSearchResults: ActionCreator<SetSearchResultsAction> = (
  items: { ref: string }[]
) => ({
  type: SET_SEARCH_RESULTS,
  payload: items
});

export const search: ActionCreator<SearchAction> = () => ({
  type: SEARCH
});

export const setSearching: ActionCreator<SetSearchingAction> = (isSearching: boolean) => ({
  type: SET_SEARCHING,
  payload: isSearching
});
