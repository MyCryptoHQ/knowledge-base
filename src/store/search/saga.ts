import { all, put, select, take, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { SEARCH, SET_SEARCH_INDEX } from './types';
import { navigate } from 'gatsby-link';
import { ApplicationState } from '../index';
import { setSearchResults } from './actions';
import { Index } from 'lunr';

const getIndex = (state: ApplicationState) => state.search.searchIndex;

const getQuery = (state: ApplicationState) => state.search.searchQuery;

let lunr: Index;

function* searchSaga(): SagaIterator {
  navigate('/search');

  let index = yield select(getIndex);
  if (!index) {
    yield take(SET_SEARCH_INDEX);
    index = yield select(getIndex);
  }

  if (!lunr) {
    lunr = Index.load(JSON.parse(index));
  }

  const query = yield select(getQuery);
  yield put(setSearchResults(lunr.search(query)));
}

export default function* rootSaga(): SagaIterator {
  yield all([takeLatest(SEARCH, searchSaga)]);
}
