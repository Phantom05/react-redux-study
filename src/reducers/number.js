import * as types from '../actions/ActionTypes';
// 초기 상태를 정의합니다.
const initialState={
  number:0
};


/**
 * 리듀서 함수를 정의합니다. 리듀서는 state와 action을 파라미터로 받습니다.
 * state 가 undefined 일때 (스토어가 생성될떄) state의 기본값을 initialState로 사용합니다.
 * action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
 * 이 떄 주의할 점은 state를 직접 수정하면 안되고,
 * 기존 상태 값에 우너하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
 */
const number = (state = initialState, action) =>{
  switch(action.type){
    case types.INCREMENT:
      return {
        number:state.number+1
      };
    case types.DECREMENT:
      return{
        number:state.number-1
      };
    default:
      return state;
  }
}

export default number;