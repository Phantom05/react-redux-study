import React, { Component } from 'react';

class Counter extends Component {
  state ={
    number:0,
    foo:{
      bar:0,
      foobar:1
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  handleIncrease = (e) =>{
    this.setState(({number,foo})=>({
      number:number+1,
      foo:{
        ...foo,
        foobar:2
      }
    }))
  }
  handleDecrease = (e)=>{
    this.setState(({number,foo})=>({
      number:number-1,
      foo:{
        ...foo,
        foobar:2
      }
    }))
  }
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        {this.props.object.e}
      </div>
    );
  }
}

export default Counter;

Counter.defaultProps ={
  onIncrement: () => console.warn('onIncrement is not defined'),
  object: {},
  array: []
}