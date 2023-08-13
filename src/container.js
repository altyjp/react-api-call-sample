import React from 'react';
import { useSelector } from 'react-redux';

import { GetPosts } from './action';
import PostDataComponent from './component';


function Container() {
  const postData = useSelector((state) => state.posts);
  return (
    <>
      <PostDataComponent posts={postData} GetPosts={GetPosts} />
    </>
  );
}
export default Container;