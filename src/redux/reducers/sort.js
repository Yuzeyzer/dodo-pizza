const initailValues = {
  type: 'SET_SORT_BY',
  payload: 1,
};

console.log(initailValues);

const setSortBy = (state = initailValues, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...(state + action.payload) };
    case 'REMOVE':
      return { ...(state - action.payload) };
    default:
      return state;
  }
};
