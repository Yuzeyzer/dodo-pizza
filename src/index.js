import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// const concat = (arr = [], ...values) => {
//   let bogdan = arr;
//   values.forEach((item) => {
//     bogdan.push(item);
//   });
//   return bogdan;
// };
// console.log(concat([2], 2, 4, 7, 9, 0));
