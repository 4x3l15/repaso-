import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, onUpdate, onDelete }) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default PostList;
