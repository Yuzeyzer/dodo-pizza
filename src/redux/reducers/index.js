import { combineReducers } from 'redux';
import filters from './filters';
import pizzas from './pizzas';

const rootReducer = combineReducers({
  filters,
  pizzas,
});


export default rootReducer