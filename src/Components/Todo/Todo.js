import React, { Component } from 'react';
import TodoListTemplate from './TodoListTemplate';
import Form from './Form';
import TodoItemList from './TodoItemList';

class Todo extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정
  state={
    input:'',
    todos:[
      {id:0,text:'리액트 소개1', checked:false},
      {id:1,text:'리액트 소개2', checked:true},
      {id:2,text:'리액트 소개3', checked:false}
    ]
  }
  handleChange = (e) =>{
    const {name,value} = e.target;
    this.setState({
      input:value
    })
  }

  handleCreate = () =>{
    const {input,todos} = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) =>{
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos:nextTodos
    })
  }
  render() {
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle
    } = this;
    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList 
          todos={todos}
          onToggle={handleToggle}
        />
      </TodoListTemplate>
    );
  }
}

export default Todo;