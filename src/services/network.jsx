/* eslint-disable class-methods-use-this */
export default class Network {
  constructor() {
    // this._apiBase = 'http://localhost:3000'; --> local
    this.apiBase = 'https://rs-demo-be1.herokuapp.com'; // --> heroku
  }

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}; received ${res.status}`);
    }

    const data = await res.json();

    console.log(data);

    return data;
  }

  async getAllPosts() {
    const res = await this.getResource('/users/');
    // console.log(res);
    return res;
  }

  transformPosts(post) {
    return {
      src: post.src,
      alt: post.alt,
      timestamp: post.timestamp,
    };
  }

  async getUserPhotos(username) {
    const users = await this.getResource('/users/');

    const user = users.find((element) => element.username === username);
    // console.log(user);
    const { posts } = user;

    return posts.map(this.transformPosts);
  }
}
