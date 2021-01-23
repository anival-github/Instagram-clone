export default class Network {
  constructor() {
    // this._apiBase = 'http://localhost:3000'; --> local
    this._apiBase = "https://rs-demo-be1.herokuapp.com"; // --> heroku
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}; received ${res.status}`);
    }

    return await res.json();
  };

  getAllPosts = async () => {
    const res = await this.getResource("/users/");
    console.log(res);
    return res;
  }

  _transformPosts = (post) => {
    return {
      src: post.src,
      alt: post.alt,
      timestamp: post.timestamp
    }
  }

  getUserPhotos = async (username) => {
    const users = await this.getResource("/users/");

    const user = users.find((element) => element.username === username);
    console.log(user);
    const { posts } = user;

    return posts.map(this._transformPosts);
  };
}