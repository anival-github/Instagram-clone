/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { React } from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => (
  <div className="container profile">
    <User
      src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
      alt="men"
      name="Scott"
    />
    <Palette />
  </div>
);

export default Profile;
