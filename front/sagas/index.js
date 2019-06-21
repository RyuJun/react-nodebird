import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import user from './user';
import post from './post';

// generator -> 무한의 개념과, 비동기에 많이쓰임
// function* generator() {

// }

axios.defaults.baseURL = 'http://localhost:9023/api';

export default function* rootSaga() {
  yield all([
    fork(user),
    fork(post),
  ]);
}





