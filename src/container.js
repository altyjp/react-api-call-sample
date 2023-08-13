import React from 'react';
import { useSelector } from 'react-redux';

import { GetPosts } from './action';
import PostDataComponent from './component';
import { useDispatch } from "react-redux";


function Container() {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.posts);
  const getPosts = async () => dispatch(await GetPosts());
  return (
    <>
      <PostDataComponent posts={postData} GetPosts={getPosts} />
    </>
  );
}
export default Container;