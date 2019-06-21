webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\react\\react-nodebird\\front\\pages\\index.js";




 // react-redux 7.1 버전 이상은 Hooks에서 redux를 사용 할 수 있도록 지원한다.
// useSelector -> Hooks에서 redux state를 가져다 쓸 수 있도록 지원 ( 기존 Hooks에서의 const [a, setA ] = useState('')  a 생각  )
// useDispatch -> Hooks에서 action을 dispatch 할 수 있도록 지원 ( 기존 Hooks에서의 const [a, setA ] = useState('')  setA 생각 )
// react-redux connect
// 기존 클래스 컴포넌트 일때는 connect 컴포넌트를 자주 사용했다.
// 하이오더 함수를 사용하여 mapStateToProps, mapDispatchToProps 함수를 따로 제작하여 component의 props로 dispatch와 현재 state를 받아온다.
// react-redux의 connect 함수를 사용한 방식 (기존 클래스컴포넌트나 react-redux 7.1버전 이전에서 많이 사용)
// react-redux의 useSelector, useDispatch 함수를 사용한 방식 (Hooks 컴포넌트 react-redux 7.1버전 이상에서 새로 사용 갠취)

var Home = function Home() {
  // Hooks에서는 성능이슈 때문에 useSelector함수를 잘게 잘게 쪼갠다.
  // 이유는 useSelector로 가져온 값이 변경되었을때 리랜더링이 일어나기 때문,
  // 구조 분해를 통해 한방에 가져와도 상관은 없다만 성능 이슈를 위하여
  // 최대한 잘게 작게 쪼개서 useSelector를 여러번 호출하면 쓸데없는 리랜더링을 줄일 수 있다.
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  console.log(mainPosts);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_MAIN_POSTS_REQUEST"]
    });
  }, []); // useEffect의 두번째 인자에 아무것도 넣지 않으면 componentDidMount와 동일,
  // componentDidMount는 컴포넌트가 첫 랜더링 후 실행됨

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), mainPosts.map(function (c) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: c,
      post: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.5fe3254f884a93203f5d.hot-update.js.map