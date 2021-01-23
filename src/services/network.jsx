
export default class Network {
  constructor() {
    // this._apiBase = 'http://localhost:3000'; --> local
    this._apiBase = 'https://rs-demo-be1.herokuapp.com'; // --> heroku
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}; received ${res.status}`);
    }

    return await res.json();
  }

  getAllPosts = async () => {
    const users = await this.getResource('/users/')

    return users;
  }

  _transformPosts = (post) => {
    return {
      src: post.src,
      alt: post.alt,
      timestamp: post.timestamp
    }
  }

  getUserPhotos = async (id) => {
    const users = await this.getResource('/users/')

    const user = users.find(element => element.id === id)

    const { posts } = user;

    return posts.map(this._transformPosts)
  }
}