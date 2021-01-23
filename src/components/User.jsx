/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import { React } from 'react';

const User = ({
  min,
  src,
  alt,
  username,
}) => (
  <a href="#" className={min ? 'user min' : 'user'}>
    <img src={src} alt={alt} />
    <div>{username}</div>
  </a>
);

export default User;
