import React from "react";
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'Juno',
    },
    content: 'first content',
    img: 'https://t1.daumcdn.net/cfile/tistory/99F361465BA3102C2B'
  }]
}

const Home = () => {
  return (
    <>
      <div>
        {dummy.isLoggedIn && <PostForm />}
        {dummy.mainPosts.map((c) => {
          return (
            <PostCard key={c} post={c} />
          );
        })}
      </div>
    </>
  )
}

export default Home
