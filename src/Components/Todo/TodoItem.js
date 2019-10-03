import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

  handleClick =(e) =>{
    const {id} = this.props;
    e.stopPropagation();
    onRemove(id)
  }
  render() {
    const {text, checked, id, onToggle, onRemove} = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={this.handleClick}>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
        
      </div>
    );
  }
}

export default TodoItem;