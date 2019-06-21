import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user';
axios.defaults.baseURL = 'http://localhost:3065/api';

// all  -> redux-saga에서 eventListener와 비슷하게 등록된 함수들을, 모두 묶어줄 때 사용한다.
// take -> redux-saga에서 generator.next()와 마찬가지로 yield 로인해 중단된 함수를 Action이 들어왔을 때 다시 재개시킨다.
// put  -> redux-saga에서의 dispatch라 생각하면 된다.
// call -> fork와 비슷하며 함수를 실행해준다. 동기 호출을 할 때 사용한다. ex) 로그인 버튼을 클릭하여 서버로 요청을 보냈을 때 응답결과를 받고 아래 코드를 동기적으로 실행
// fork -> call과 비슷하며 함수를 실행해준다. 비동기 호출을 할 때 사용한다. ex) 로그인 버튼을 클릭하여 서버로 요청을 보냈을 때 비동기로 바로 아래코드 실행
// delay -> 딜레이를 준다. 몇초뒤 실행
// takeEvery -> redux-saga에서 while(true)와같이 지속 리스닝을 위한 지원 effect
// takeLatest -> takeEvery와 겉보기에는 별차이 없어보인다. 하지만 동시에 여러번의 작업이 들어왔을때 마지막 부분만 실행한다
// 예를 들자면 ex) 로그인 버튼을 광클릭 하게 되었을때 여러번 요청 가는것을 방지하기위해 마지막것만 처리해준다. 
// takeEvery, takeLatest의 사용 구분은, 동시에 여러작업이 들어왔을대 모든것들을 처리해줄 것이냐, 마지막것만 처리해줄 것이냐로 구분하면 된다.


// ----------------------------------- login -------------------------------------

function logInAPI(loginData) {
  // 서버에 요청을 보내는 부분
  return axios.post('/user/login', loginData, {
    withCredentials: true,
  });
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
}


// ----------------------------------- login -------------------------------------


// ----------------------------------- signup ------------------------------------

function signUpAPI(signUpData) {
  // 서버에 요청을 보내는 부분
  return axios.post('/user/', signUpData);
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

// ----------------------------------- signup ------------------------------------


// ----------------------------------- logout ------------------------------------

function logOutAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/user/logout', {}, {
    withCredentials: true,
  });
}

function* logOut(action) {
  try {
    yield call(logOutAPI);
    yield put({ // put은 dispatch 동일
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e
    });
  }
}

function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}

// ----------------------------------- logout ------------------------------------


// ----------------------------------- loadUser -------------------------------------

function loadUserAPI() {
  // 서버에 요청을 보내는 부분
  return axios.get('/user/', {
    withCredentials: true,
  });
}

function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    yield put({ // loginAPI 성공 put은 dispatch와 동일
      type: LOAD_USER_SUCCESS,
      data: result.data
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE
    });
  }
}
function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

// ----------------------------------- loadUser -------------------------------------


export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogout),
    fork(watchLoadUser),
    fork(watchSignUp)
  ]);
}