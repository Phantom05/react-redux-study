import React, { Component } from 'react';

class User extends Component {
  shouldComponentUpdate(prevProps, prevState) {
    return this.props.user !== prevProps.user;
  }
  render() {
    const {username } = this.props.user.toJS();
    console.log('%s가 렌더링 되고있어요!!!', username);

    return (
      <div>
        {username}
      </div>
    );
  }
}

export default User;