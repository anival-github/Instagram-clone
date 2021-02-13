/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import User from '../Users/User';

const Post = ({ post, user }) => {
  const {
    username, altname, photo, id,
  } = user;

  const {
    src, alt, descr, timestamp,
  } = post;

  const date = new Date(+timestamp).toUTCString();

  return (
    <div className="post">
      <User
        id={id}
        src={photo}
        alt={altname}
        username={username}
        min
      />
      <img src={src} alt={alt} />
      <div className="post__name">
        {username}
      </div>
      <div className="post__descr">
        {descr}
      </div>
      <p className="post__time">
        {date}
      </p>
    </div>
  );
};

export default Post;
