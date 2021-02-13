/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import ErrorMessage from '../Common/Error/Error';

class ProfileContainer extends Component {
  componentDidMount() {
    let { userId } = this.props.match.params;

    if (!userId) {
      userId = 'db6ba40b-ceec-4d12-9b3f-eb9b2c9145de';
    }

    this.props.setUser(userId);
  }

  render() {
    if (this.props.usersData.error) {
      return <ErrorMessage />;
    }

    const { currentUserId } = this.props.usersData;

    if (currentUserId) {
      this.user = this.props.usersData.users.find((item) => item.id === currentUserId);
    }

    return <Profile user={this.user} />;
  }
}

export default compose(
  withRouter,
)(ProfileContainer);
