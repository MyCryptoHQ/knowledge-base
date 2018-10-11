import { combineReducers } from 'redux';
import { ApplicationState } from './index';
import searchReducer from './search/reducer';

const rootReducer = combineReducers<ApplicationState>({
  search: searchReducer
});

export default rootReducer;
