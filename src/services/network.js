/* eslint-disable no-undef */
export default class Network {
  constructor() {
    // this._apiBase = 'http://localhost:3000'; --> local
    this.apiBase = 'https://rs-demo-be1.herokuapp.com'; // --> heroku
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}; received ${res.status}`);
    }

    return res.json();
  }

  async getAllUsers() {
    const res = await this.getResource('/users/');
    return res;
  }
}
