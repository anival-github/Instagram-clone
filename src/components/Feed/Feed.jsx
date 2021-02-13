/* eslint-disable react/prop-types */
import React from 'react';
import Posts from './Posts/Posts';
import Users from './Users/Users';

const Feed = ({ usersData }) => (
  <div className="container feed">
    <Posts usersData={usersData} />
    <Users usersData={usersData} />
  </div>
);

export default Feed;
