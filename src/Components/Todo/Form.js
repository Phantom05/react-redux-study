import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    const {value, onChange, onCreate, onKeyPress} = this.props;
    return (
      <div className="form">
          <input 
            value={value}
            onChange={onChange} 
            onKeyPress={onKeyPress}
          />
          <div className="create-button" onClick={onCreate}>
            추가
          </div>
      </div>
    );
  }
}

export default Form;