export const initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'Juno',
    },
    content: 'first content',
    img: 'https://t1.daumcdn.net/cfile/tistory/99F361465BA3102C2B'
  }],
  imagePaths: []
}

// Action Name -> Action의 이름
export const ADD_POST = 'ADD_POST';
export const ADD_DUMMY = 'ADD_DUMMY';

// Action -> Store의 State를 바꾸는 행동
const addPost = {
  type: ADD_POST,
}
const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'Hello',
    UserId: 1,
    User: {
      nickname: 'Juno'
    }
  }
}

// reducer Action의 결과로 Store의 State를 어떻게 바꿀지의 정의 ( 로직이 담김 )
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state
      }
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;