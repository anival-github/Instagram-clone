/* eslint-disable react/prop-types */
import React from 'react';
import User from '../Feed/Users/User';
import Palette from './Palette/Palette';

const Profile = ({ user }) => (
  <div className="container profile">
    { user
      && (
      <User
        src={user.photo}
        alt={user.altname}
        name={user.username}
      />
      )}
    <Palette user={user} />
  </div>
);

export default Profile;
