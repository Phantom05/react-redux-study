// NOTE: components/counter => 뷰만 담당.
// 데이터를 업데이트 할수 없고 props로 데이터를 받아오기만 할 수 있음.
// state를 갖고있으면 오로지 ui에 관한 것이여야만 함.
// 주로 함수형 컴포넌트이며 state를 지녀야 할때만 class 컴포넌트로 사용됨.
import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  console.log(number);
  console.log(color);
  return (
    <div
      className="Counter color:red background:black"
      onClick={onIncrement}
      onContextMenu={
        (e) => {
          e.preventDefault();
          onDecrement();
        }
      }
      onDoubleClick={onSetColor}
      style={{ backgroundColor: color }}>
      {number}
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;