import React, { Component } from 'react';
import './Palette.css';

const Color = ({ color, active, onClick }) => {
  return (
    <div 
      className={`color ${active === true && 'active'}`} 
      style={{background:color}}
      onClick={onClick(color)}
      ></div>
  )
}


class Palette extends Component {

  handleClick =(color) =>{
    return ()=>{
      this.props.onColorChange(color)
    }
  }
  render() {
    const props = this.props;
    const {colors,color} = props;
    return (
      <div className="palette">
        {colors.map(
          list => (
          <Color 
            color={list.color} 
            key={list.id}
            onClick={this.handleClick}
            active={list.color === color}
          />)
        )}
      </div>  
    );
  }
}

export default Palette;
Palette.defaultProps= {
  colors:[]
}