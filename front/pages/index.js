import React, { useEffect } from "react";
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector, useDispatch } from 'react-redux';

// react-redux 7.1 버전 이상은 Hooks에서 redux를 사용 할 수 있도록 지원한다.
// useSelector -> Hooks에서 redux state를 가져다 쓸 수 있도록 지원 ( 기존 Hooks에서의 const [a, setA ] = useState('')  a 생각  )
// useDispatch -> Hooks에서 action을 dispatch 할 수 있도록 지원 ( 기존 Hooks에서의 const [a, setA ] = useState('')  setA 생각 )

// react-redux connect
// 기존 클래스 컴포넌트 일때는 connect 컴포넌트를 자주 사용했다.
// 하이오더 함수를 사용하여 mapStateToProps, mapDispatchToProps 함수를 따로 제작하여 component의 props로 dispatch와 현재 state를 받아온다.
// react-redux의 connect 함수를 사용한 방식 (기존 클래스컴포넌트나 react-redux 7.1버전 이전에서 많이 사용)
// react-redux의 useSelector, useDispatch 함수를 사용한 방식 (Hooks 컴포넌트 react-redux 7.1버전 이상에서 새로 사용 갠취)


const Home = () => {
  // Hooks에서는 성능이슈 때문에 useSelector함수를 잘게 잘게 쪼갠다.
  // 이유는 useSelector로 가져온 값이 변경되었을때 리랜더링이 일어나기 때문,
  // 구조 분해를 통해 한방에 가져와도 상관은 없다만 성능 이슈를 위하여
  // 최대한 잘게 작게 쪼개서 useSelector를 여러번 호출하면 쓸데없는 리랜더링을 줄일 수 있다.
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
  }, []);
  // useEffect의 두번째 인자에 아무것도 넣지 않으면 componentDidMount와 동일,
  // componentDidMount는 컴포넌트가 첫 랜더링 후 실행됨
  return (
    <>
      <div>
        {isLoggedIn && <PostForm />}
        {mainPosts.map((c) => {
          return (
            <PostCard key={c} post={c} />
          );
        })}
      </div>
    </>
  )
}

export default Home;
