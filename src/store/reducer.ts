import { combineReducers } from 'redux';
import { ApplicationState } from './index';
import { searchReducer, SearchActions } from './search';

export type ApplicationActions = SearchActions;

const rootReducer = combineReducers<ApplicationState>({
  search: searchReducer
});

export default rootReducer;
