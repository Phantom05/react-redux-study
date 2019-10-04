import React, { Component } from 'react';
import UserList from './UserList';
import {Map, List} from 'immutable';

class Immutable extends Component {
  id = 3;

  state = {
    data:Map({
      input: '',
      users: List([
        Map({
            id: 1,
            username: 'velopert'
        }),
        Map({
            id: 2,
            username: 'mjkim'
          })
      ])
    })
  }

  onChange = (e) => {
    const { value } = e.target;
    const {data} = this.state;
    this.setState({
      data:data.set('input',value)
    });
  }

  onButtonClick = (e) => {
    const {data} = this.state;
    // update는 기존의 값을 참조해야할떄 씀. 첫번재 인자로 타겟하고 두번째 인자로 타겟한 친구를 참조하게됨. users를 찾고 users에다가 푸쉬를 한 케이스임.
    this.setState({
      data:data.set('input','')
      .update('users', users => users.push(Map({
        id:this.id++,
        username:data.get('input')
      })))
    })

  }

  render() {
    const { onChange, onButtonClick } = this;
    const {data} = this.state;
    const input = data.get('input');
    const users = data.get('users');

    return (
      <div>
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default Immutable;