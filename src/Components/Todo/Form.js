import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  
  render() {
    const {value, onChange, onCreate, onKeyPress,color} = this.props;
    return (
      <div className="form">
          <input 
            value={value}
            onChange={onChange} 
            onKeyPress={onKeyPress}
            style={{color:color}}
          />
          <div className="create-button" onClick={onCreate(color)}>추가</div>
      </div>
    );
  }
}

export default Form;