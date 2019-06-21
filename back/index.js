const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: true, // 모든 요청을 허락함 , 'http://localhost:3000' -> 해당 주소만 허락함
  credentials: true // front와 backend 서버 둘다 설정해주어야 쿠키 공유 가능
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false, // 매번 세션 강제 저장
  saveUninitialized: false, // 빈값도 저장
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true, // javascript로 접근 불가
    secure: false, // https를 사용할 때 true
  },
  name: 'react-nodebird'
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);



app.listen(9023, () => {
  console.log('server is running on http://localhost:9023');
})