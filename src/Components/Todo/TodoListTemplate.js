import React, { Component } from 'react';
import './TodoListTemplate.css';
import Palette from './Palette';


class TodoListTemplate extends Component {
  render() {
    const { form, children, colors, onColorChange,color } = this.props;
    return (
      <main className="todo-list-template">
        <div className="title">
          오늘 할 일
          <Palette 
            colors={colors} 
            onColorChange={onColorChange}  
            color={color}/>
        </div>
        <section className="form-wrapper">
          {form}
        </section>
        <section className="form-wrapper">
          {children}
        </section>
      </main>
    );
  }
}

export default TodoListTemplate;