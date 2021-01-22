import axios from 'axios';

const API = `http://localhost:3001`;

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  axios
    .get(
      `${API}/pizzas?${category !== -1 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};