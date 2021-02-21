/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

const User = ({
  min, src, alt, name, id,
}) => (
  <NavLink to={`/profile/${id || ''}`} className={min ? 'user min' : 'user'}>
    <img src={src} alt={alt} />
    <div>{name}</div>
  </NavLink>
);

export default User;
