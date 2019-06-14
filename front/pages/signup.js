import React, { useState, useCallback, useEffect } from "react"
import { Form, Input, Checkbox, Button } from "antd"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from "../reducers/user";

const TextInput = ({ value }) => (
  <div>{value}</div>
);

TextInput.propTypes = {
  value: PropTypes.string,
};


// useCallback -> props로 넘어가는 state는 useCallback에 등록하여 넘겨주어야한다.
//                그래야 자식컴포넌트에 대한 불필요한 리 랜더링을 방지할 수 있다.
//                현재 프로젝트에서는 antd 컴포넌트 들에 props로 넘기는 event리스너 들에 대한 useCallback이 필요하다.
//                사용법은 eventListener 함수를 useCallback의 첫번째 인자로 넘겨주고, 두번째 인자로는 useCallback내 에서 사용되는
//                state값을 배열에 담아 준다


// [ useCallback example ]
// const onSubmit = useCallback(e => {
//   e.preventDefault()
//   if (password !== passwordCheck) {
//     return setPasswordError(true)
//   }
//   if (!term) {
//     return setTermError(true)
//   }
// }, [password, passwordCheck, term]);

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();
  const { isSigningUp, me } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      alert('로그인했으니 메인페이지로 이동합니다.');
      Router.push('/');
    }
  }, [me && me.id]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        id,
        password,
        nick,
      },
    });
  }, [password, passwordCheck, term]);


  const onChangePasswordChk = useCallback(e => {
    setPasswordError(e.target.value !== password)
    setPasswordCheck(e.target.value)
  }, [password]);

  const onChangeTerm = useCallback(e => {
    setTermError(false)
    setTerm(e.target.checked)
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordChk}
          />
          {passwordError && <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            Juno 말을 잘 들을 것을 동의 합니다.
            </Checkbox>
          {termError && <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={isSigningUp}>
            가입하기
            </Button>
        </div>
      </Form>
    </>
  )
}

export default Signup
