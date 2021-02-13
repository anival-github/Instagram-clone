/* eslint-disable react/prop-types */
import React from 'react';
import ErrorMessage from '../../Common/Error/Error';
import Post from './Post';

const Posts = ({ usersData }) => {
  const renderPosts = (users) => users
    .map((user) => user.posts
      .map((post) => <Post key={post.timestamp} user={user} post={post} />));

  if (usersData.error) {
    return <ErrorMessage />;
  }

  return (
    <div className="left">
      {renderPosts(usersData.users)}
    </div>
  );
};

export default Posts;
