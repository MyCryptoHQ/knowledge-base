import { ActionCreator } from 'redux';
import { SEARCH, SearchAction, SET_SEARCH_TEXT, SetSearchTextAction } from './types';

export const setSearchText: ActionCreator<SetSearchTextAction> = (searchText: string) => ({
  type: SET_SEARCH_TEXT,
  payload: searchText
});

export const search: ActionCreator<SearchAction> = () => ({
  type: SEARCH
});
