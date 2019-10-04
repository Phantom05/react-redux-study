import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

// const array =[
//   {id:0,text:'hello',tage:'a'},
//   {id:1,text:'world',tage:'b'},
//   {id:2,text:'bye',tage:'c'},
// ];

// console.log(
//   array.map(list => list.id ===1
//     ? {...list,text:'Korea'}
//     : list)
// );
// console.log(array);

class PhoneList extends Component {
  shouldComponentUpdate(nextProps,nextState){
    return nextProps.data !== this.props.data;
  }
  render() {
    console.log('render PhoneInfoList');
    const {data, onRemove, onUpdate} = this.props;
    const list = data.map(
      info => (
      <PhoneInfo 
        key={info.id} 
        info={info} 
        onRemove={onRemove} 
        onUpdate={onUpdate}  
       />)
    )
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneList;

PhoneList.defaultProps ={
  data:[],
  onRemove: () => console.warn(`onRemove not defined`),
  onUpdate: () => console.warn(`onUpdate not defined`)
}