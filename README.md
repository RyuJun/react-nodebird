# React-SNS-App Project Study

## day01
- 프로젝트 구조
- next와 eslint 설치
- next 라우팅 시스템
- ant design 적용
- 기본페이지 제작
- 회원가입 폼 제작
- 회원가입 State와 custom hook

## day02
- _app.js로 레이아웃 분리하기
- prop-types
- antd 그리드 시스템
- 커스텀 훅 재사용하기
- 메인화면 만들기
- 프로필 화면 만들기
- 컴포넌트 분리하기

## day03
- redux 주요 개념
- 리엑트 state와 redux
- 불변성과 리듀서 여러개 합치기 ( combineReducers )
- redux와 react 연결
- redux devTools 사용
- react-redux Hooks 사용
- react-redux connect
- dummy data로 redux 사용
- react state와 redux state

## day04
- Redux Saga의 필요성과 맛보기
- Saga 미들웨어 Redux에 연결
- ES2015 제너레이터
- Saga의 제너레이터 이해
- Saga에서 반복문 제어
- takeEvery, takeLatest
- fork, call Saga 총정리
- Saga 패턴

## day05
- eslint-config-airbnb및 코드정리
- Redux state와 action 구조 잡기
- 로그인 Redux 사이클
- 회원가입 Redux 사이클
- 게시물 작성 Redux 사이클
- next Router로 페이지 이동
- 댓글 컴포넌트 만들기
- 댓글작성 리덕스 사이클

## day06
- 백엔드 서버 구동에 필요한 모듈(패키지)들<br>
  ```
  dependencies
  express -> node 서버를 편하게 돌릴 수 있도록 도와주는 프레임워크
  axios -> http요청을 보낼 때 사용
  bcrypt -> 비밀번호 암호화를 위한 모듈
  cookie-parser -> 로그인할 때 쿠키사용을 위한 모듈
  express-session -> 쿠키와 함께 로그인 정보를 저장하기위한 세션
  dotenv -> 환경변수 (비밀번호 관리를위함)
  cors -> CORS 보안 제약을 풀어줄 수 있도록 하는 모듈
  helmet, hpp -> node와 exprees의 보안을 담당함
  morgan -> 서버에 로그를 남겨준다
  multer -> 이미지 업로드를 위한 모듈
  passport, passport-local -> 회원가입 or 로그인 관리 (쉽게 처리할 수 있도록 도와줌)
  sequelize, sequelize-cli -> DB로 MySQL사용 ORM : SQL문과 JavaScript를 연결시켜줌 ( JavaScript 코드로 DB를 조작 가능하게 도와줌)
  mysql2 -> mysql을 사용하기위한 모듈

  devDependencies
  eslint -> 개발 시 javaScript 문법 교정, 룰을 맞추기 위한 모듈
  eslint-config-airbnb -> javaScript 문법 교정, 룰을 맞추기 위한 모듈
  eslint-plugin-jsx-a11y -> javaScript 문법 교정, 룰을 맞추기 위한 모듈
  nodemon -> node는 서버쪽 코드 변동사항을 자동으로 반영하지 못한다, 서버의 코드 변경을 감지하여 서버를 자동으로 on/off 해준다.
  ```
- HTTP 요청 주소 체계 이해
- Sequelize와 ERD
- 테이블간의 관계들
- DB 연결하기
- 백엔드 서버 API 만들기
- 회원가입 컨트롤러 만들기
- 실제 회원가입과 미들웨어들
- 로그인을 위한 미들웨어들
- passport와 쿠키, 세션 동작 원리
- passport정리 및 실제 로그인
- 다른 도메인간의 쿠키 주고받기
- include와 as, foreignKey
- logout과 사용자 정보 가져오기
- 게시글 작성과 데이터 관계 연결하기
- 게시글 불러오기