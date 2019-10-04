import React, { Component } from 'react';
import PhoneForm from './PhoneForm';
import PhoneList from './PhoneList';
class PhoneBook extends Component{
  id = 2;
  state={
    information:[
      {
        id: 0,
        name: '쯔녕쓰',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '민준쓰',
        phone: '010-0000-0000'
      },
    ],
    keyword:''
  }
  handleChange =(e)=>{
    const {name,value} = e.target;
    this.setState({
      [name]:value
    })
  }
  handleCreate = (data) =>{
    console.log(data);
    this.setState(({information}) =>({
      information:information.concat({id:this.id++,...data})
    }))
  }

  handleRemove = (id) =>{
    const {information} = this.state;
    this.setState({
      information:information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id,data) => {
    const { information } = this.state;
    this.setState({
      information:information.map(
        info => id === info.id
        ? {...info, ...data}
        : info
      )
    })
  }
  render(){
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
         <PhoneForm 
          onCreate={this.handleCreate}
         />
         <p>
           <input 
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            name="keyword"
            value={keyword}
           />
         </p>
         <PhoneList 
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
         />
      </div>
    )
  }
}


export default PhoneBook;
