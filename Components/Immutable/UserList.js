import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  
  shouldComponentUpdate(prevProps, prevState) {
    return prevProps.users !== this.props.users;
  }
  
  renderUsers = () => {
    const { users } = this.props;
    return users.map((user) => (
      <User key={user.get('id')} user={user} />
    ))
  }

  render() {
    console.log('UserList 가 렌더링되고 있어요!')
    const { renderUsers } = this;
    return (
      <div>
        {renderUsers()}
      </div>
    );
  }
}

export default UserList;