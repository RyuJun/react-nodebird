import { all, call } from 'redux-saga/effects';
import user from './user';
import post from './post';


// generator -> 무한의 개념과, 비동기에 많이쓰임
// function* generator() {

// }

export default function* rootSaga() {
  yield all([
    call(user),
    call(post)
  ]);
}