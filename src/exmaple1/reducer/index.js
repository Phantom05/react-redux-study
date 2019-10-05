// 기본 스테이트 정의하기
const initialState ={
  number:0
};

// 리듀서 만들기
// 리듀서는 이전상태에 따라 새로운 상태를 리턴하는것이 리듀서의 역할.
// 대부분 보기좋게 스위치문으로 처리함.
// 리듀서는 2개의 인자를 받는데 state와 action을 받음. action은 우리가 정의할떄 떄리는거고 어떤 리듀서 스위치문에 들어갈지를 정하기위해,
// state는 현재 state의 상태를 보내서 변경하는것임,
const reducer = (state = initialState, action) => {
  switch(action.type){
    case INCREMENT:
      return {
        number: state.number+1
      };
    default:
      return state;
  }
}

export default reducer;