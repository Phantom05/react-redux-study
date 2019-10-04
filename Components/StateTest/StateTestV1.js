import React, { Component } from 'react';
import './StateTest.css';

class ListItem extends Component {
  state = {
    active: false
  }

  handleOriginClick = (id) => () => {
    this.props.onClick(id);
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    const { info } = this.props;
    const { active } = this.state;
    return (
      <li
        onClick={this.handleOriginClick(info.id)}
        className={active ? 'on' : ''} >{info.content}
      </li>
    )
  }
}


class StateTest extends Component {
  state = {
    listArray: [
      { id: 0, content: 'hello' },
      { id: 1, content: 'world' },
      { id: 2, content: 'bye' },
    ]
  }

  handleClick = (id) => {
    const { listArray } = this.state;
    const activeContent = listArray.filter(
      info => info.id === id
    );
    console.log(activeContent[0]);
  }

  render() {
    const { listArray } = this.state
    return (
      <div>
        <ul>
          {listArray.map(
            info => (
              <ListItem
                info={info}
                onClick={this.handleClick}
                key={info.id}
                active={info.active}
              />)
          )}
        </ul>
      </div>
    );
  }
}

export default StateTest;