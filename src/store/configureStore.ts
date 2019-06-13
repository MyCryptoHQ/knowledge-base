import { compose, createStore, Store } from 'redux';
import rootReducer from './reducer';

export const configureStore = (): Store => {
  const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
      typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  return createStore(rootReducer, composeEnhancers());
};
