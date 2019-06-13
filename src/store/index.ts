import { SearchState } from './search';

export interface ApplicationState {
  search: SearchState;
}

export * from './configureStore';
