import axios from 'axios';

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
