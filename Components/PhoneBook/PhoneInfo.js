import React, { Component } from 'react';

class PhoneInfo extends Component {
  state = {
    editing: false,
    name: '',
    phone: '',
  }
  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id)
  }

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  
  shouldComponentUpdate(nextProps, nextState){
    if(!this.state.editing
      && !nextState.editing
      && nextProps.info === this.props.info){
        return false;
      }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('didUpdate');
    // console.log(prevProps);
    // console.log(this.props);
    // console.log(this.props == prevProps);
    const { info, onUpdate } = this.props;

    // editing 값이 false -> true 로 전환 될 때
    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }

    // editing 값이 true -> false 로 전환 될 때
    if (prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      })
    }
  }

  render() {
    console.log('render PhoneInfo ' + this.props.info.id);
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    const { editing } = this.state;

    if (editing) {
      return (
        <div style={style} >
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="전화번호"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>적용</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      )
    } // 수정모드
    //일반모드
    const { name, phone } = this.props.info;
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default PhoneInfo;

PhoneInfo.defaultProps = {
  info: {
    name: '이름',
    phone: '010-0000-0000',
    id: 0
  }
}