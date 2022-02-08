import { put, takeLatest } from 'redux-saga/effects';

import { client } from '../../modules/request';
import { CATEGORY_ACTIONS, successGetMovies } from '../actions/movies';

interface ResponseGenerator {
  data?: any,
}

function* getMovies() {
  try {
    const response: ResponseGenerator = yield client.get('topmovies/limit=100/json');
    yield put(successGetMovies(response.data.entry));
  } catch (err) {
    console.log(err);
  }
}

function* CategoriesSaga() {
  yield takeLatest(CATEGORY_ACTIONS.ATTEMPT_TO_GET_MOVIES, getMovies);
}

export default CategoriesSaga;