import React, { Component } from 'react';
import TodoListTemplate from './TodoListTemplate';
import Form from './Form';
import TodoItemList from './TodoItemList';

class Todo extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정
  state={
    input:'',
    todos:[
      {id:0,text:'리액트 소개1', checked:false,color:"#343a40"},
      {id:1,text:'리액트 소개2', checked:true,color:'#f03e3e'},
      {id:2,text:'리액트 소개3', checked:false,color:'#12b886'}
    ],
    colors:[
      {color:'#343a40',id:0}, 
      {color:'#f03e3e',id:1}, 
      {color:'#12b886',id:2}, 
      {color:'#228ae6',id:3}
    ],
    currentColor:'#343a40'
  }
  handleChange = (e) =>{
    const {name,value} = e.target;
    this.setState({
      input:value
    })
  }

  handleCreate = (color) =>{
    return ()=>{
      const {input,todos} = this.state;
      this.setState({
        input: '', // 인풋 비우고
        // concat 을 사용하여 배열에 추가
        todos: todos.concat({
          id: this.id++,
          text: input,
          checked: false,
          color:color
        })
      });
      
    }
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
  
  handleRemove= (id) => {
    const {todos} = this.state;
    this.setState({
      todos:todos.filter(todo => todo.id !== id)
    })
  }

  handleColorchange = (color) =>{
    console.log('click',color);
    this.setState({
      currentColor:color
    })
  }

  render() {
    const {input, todos, colors, currentColor} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    return (
      <TodoListTemplate 
      colors={colors} 
      onColorChange={this.handleColorchange}
      color={currentColor}
      form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={currentColor}
        />
      )}>
        <TodoItemList 
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
          
        />
      </TodoListTemplate>
    );
  }
}

export default Todo;