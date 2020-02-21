import { combineReducers } from 'redux';
import { ApplicationState } from './index';
import { navigationReducer, SearchActions } from './navigation';

export type ApplicationActions = SearchActions;

const rootReducer = combineReducers<ApplicationState>({
  navigation: navigationReducer
});

export default rootReducer;
