import { Component } from "react";
// import Post from './Post'
import InstaService from "../services/instaService";
import User from './User';
import ErrorMessage from './Error';

export default class Posts extends Component {
  InstaService = new InstaService();

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
      const { name, altname, photo, src, alt, descr, id } = item;
      return (
        <div key={id} className="post">
          <User
            src={photo}
            alt={altname}
            name={name}
            min
          />
          <img src={src} alt={alt}></img>
          <div className="post__name">
            {name}
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
