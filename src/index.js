// NOTE: 메인 index.js
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import App from './containers/App';
import App from './exmaple1/App';
import './index.css';
import * as serviceWorker from './serviceWorker';


// Redux 관련 불러오기
import { createStore } from 'redux';
// reducers => counter 함수.
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

// ReactDOM.render(
//     <App />
//   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
