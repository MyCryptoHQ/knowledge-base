import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import sagas from './sagas';

export const configureStore = (): Store => {
  const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
      typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

  Object.keys(sagas).forEach((saga: string) => {
    sagaMiddleware.run((sagas as any)[saga]);
  });

  return store;
};
