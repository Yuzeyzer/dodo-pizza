import { createStore } from 'redux';
import './reducers/sort.js';
function counterReducer(state = { number: 0 }, action) {
  switch (action.type) {
    case 'ДОБАВИТЬ':
      return { number: state.number + 100 };
    case 'УМЕНЬШИТЬ':
      return { number: state.number - 100 };
    case 'ОБНУЛЕНИЕ':
      return { number: (state.number = 0) };
    default:
      return state;
  }
}
const store = createStore(counterReducer);

export default store;

// import { createStore } from 'redux';

// function counterReducer(state = { value: 0 }, action) {
//   switch (action.type) {
//     case 'ДОБАВИТЬ':
//       return { value: state.value + 1 };
//     case 'ОТНЯТЬ':
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer);

// export default store;
