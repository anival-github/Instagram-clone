import { Component } from "react";
// import Post from './Post'
// import InstaService from "../services/instaService";
import Network from "../services/network";
import User from './User';
import ErrorMessage from './Error';

export default class Posts extends Component {
  // InstaService = new InstaService();
  InstaService = new Network();

  state = {
    posts: [],
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

  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      error: false,
    });
    console.log(this.state.posts);
  };

  onError = (err) => {
    this.setState({
      error: true,
    });

    console.log(err);
  };

  renderItems(arr) {
    return arr.map((item) => {
      const { username, altname, photo, id } = item;
      const { src, alt, descr } = item.posts[0];
      return (
        <div key={id} className="post">
          <User
            src={photo}
            alt={altname}
            username={username}
            min
          />
          <img src={src} alt={alt}></img>
          <div className="post__name">
            {username}
          </div>
          <div className="post__descr">
            {descr}
          </div>
        </div>
      );
    });
  }

  render() {
    const { error, posts } = this.state;

    if (error) {
      return <ErrorMessage />
    }

    const items = this.renderItems(posts);

    return (
      <div className="left">
        {items}
      </div>
    );
  }
}
