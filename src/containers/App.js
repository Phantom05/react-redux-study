import React, { Component } from 'react';
import CounterContainer from './CounterContainer';
class App extends Component{
 
  render(){
    console.log('app');
    return (
      <div>
        <CounterContainer />
      </div>
    )
  }
}


export default App;
