/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { getUsers, setUser } from './redux/users-reducer';
import Feed from './components/Feed/Feed';
import ProfileContainer from './components/Profile/ProfileContainer';

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => (<Feed usersData={this.props.usersData} />)} />
        <Route exact path="/profile/:userId?" render={() => (<ProfileContainer usersData={this.props.usersData} setUser={this.props.setUser} />)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usersData: state.usersData,
});

export default connect(mapStateToProps, { getUsers, setUser })(App);
