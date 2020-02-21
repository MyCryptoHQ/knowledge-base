import { ActionCreator } from 'redux';
import {
  SEARCH,
  SearchAction,
  SetDrawerOpenAction,
  SetSearchTextAction,
  SET_DRAWER_OPEN,
  SET_SEARCH_TEXT
} from './types';

export const setSearchText: ActionCreator<SetSearchTextAction> = (searchText: string) => ({
  type: SET_SEARCH_TEXT,
  payload: searchText
});

export const search: ActionCreator<SearchAction> = () => ({
  type: SEARCH
});

export const setDrawerOpen: ActionCreator<SetDrawerOpenAction> = (payload: boolean) => ({
  type: SET_DRAWER_OPEN,
  payload
});
