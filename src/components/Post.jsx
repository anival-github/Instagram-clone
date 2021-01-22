import { Component } from "react";
import User from './User'

export default class Post extends Component {
  render () {
    return (
      <div className="post">
        <User
          src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="men"
          name="Scott"
          min
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          Some post bla bla bla
        </div>
      </div>
    )
  }
}