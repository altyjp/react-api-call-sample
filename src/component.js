import React from 'react';

function PostDataComponent(props) {
  console.log(props);

  const GetPosts = props.GetPosts;
  const posts = props.posts;

  return (
    <>
      <button onClick={GetPosts}>GetPost</button>
      <ul>
        {posts && posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default PostDataComponent;
