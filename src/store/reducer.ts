import { combineReducers } from 'redux';
import { navigationReducer, SearchActions } from './navigation';
import { ApplicationState } from './index';

export type ApplicationActions = SearchActions;

const rootReducer = combineReducers<ApplicationState>({
  navigation: navigationReducer
});

export default rootReducer;
