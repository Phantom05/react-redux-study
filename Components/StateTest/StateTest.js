import React, { Component } from 'react';
import './StateTest.css';

class ListItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.active !== nextProps.active;
  }
  render() {
    const { info, onClick, active } = this.props;
    return (
      <li
        onClick={onClick(info.id)}
        className={active ? 'on' : ''} >{info.content}</li>
    )
  }
}


class StateTest extends Component {
  state = {
    listArray: [
      { id: 0, content: 'hello', active: true },
      { id: 1, content: 'world', active: true },
      { id: 2, content: 'bye', active: true },
    ]
  }

  handleClick = (id) => () => {
    this.setState(({ listArray }) => ({
      listArray: listArray.map(
        info => id === info.id
          ? { ...info, active: !info.active }
          : info
      )
    }))
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