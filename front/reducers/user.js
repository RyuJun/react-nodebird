const dummyUser = {
  nickname: 'Juno',
  Post: [],
  Followings: [],
  Followers: [],
  signUpData: []
}
export const initialState = {
  isLoggedIn: false,
  user: null
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';


// 동적 데이터 즉, 값이 동적으로 변경될 수 있는 action은 함수로 만들어서 return값에 인자로 넘어온 data를 넣어준다.
export const signupAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data
  };
};
export const signUpSuccessAction = {
  tpye: SIGN_UP_SUCCESS,
}

export const loginAction = {
  type: LOG_IN_REQUEST,
  data: {
    nickname: 'Juno'
  }
}
export const logOutAction = {
  type: LOG_OUT_REQUEST,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser
      }
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;