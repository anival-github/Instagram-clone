import React from 'react';
import User from './User';

export default function Users() {
  return (
    <div className="right">
      <User
        src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="men"
        name="Scott"
      />
      <div className="users__block">
        <User
          src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="men"
          name="Scott"
          min
        />
        <User
          src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="men"
          name="Scott"
          min
        />
        <User
          src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="men"
          name="Scott"
          min
        />
        <User
          src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="men"
          name="Scott"
          min
        />
      </div>
    </div>
  );
}
