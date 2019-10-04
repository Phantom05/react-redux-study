import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {


  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  handleToggle =() => {
    const {onToggle, id} = this.props;
    onToggle(id)
  }

  handleRemoveItem =(e) => {
    e.stopPropagation();
    const {onRemove, id} = this.props;
    onRemove(id)
  }
  render() {
    
    const {text, checked, id ,color} = this.props;
    console.log(id);
    return (
      <div className="todo-item" onClick={this.handleToggle}>
        <div className="remove" onClick={this.handleRemoveItem}>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div style={{color:color}}>{text}</div>
        </div>
        { checked && (<div className="check-mark">✓</div>)}
      </div>
    );
  }
}

export default TodoItem;