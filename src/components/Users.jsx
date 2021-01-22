import React, { Component } from "react";
import InstaService from "../services/instaService";
import User from "./User";
import ErrorMessage from "./Error";

export default class Users extends Component {
  InstaService = new InstaService();

  state = {
    users: [],
    error: false,
  };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }

  onPostsLoaded = (users) => {
    this.setState({
      users,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
    });
  };

  render() {
    const { users, error } = this.state;
    if (error) {
      return <ErrorMessage />;
    }
    return (
      <div className="right">
        <User
          src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="men"
          name="Scott"
        />
        <div className="users__block">
          {users.map((item) => {
            return (
              <User
                src={item.photo}
                alt={item.alt}
                name={item.altname}
                min
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
