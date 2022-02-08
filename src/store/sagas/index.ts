import { all } from 'redux-saga/effects';

import categories from './movies';

export default function* rootSaga() {
  yield all([
    categories(),
  ]);
}