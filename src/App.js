import './index.scss';
import Header from './components/header';
import Cart from './pages/cart';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import React from 'react';
import store from './redux/store';

function App() {
  const [num, setNum] = React.useState(store.getState().number);

  const add = () => {
    store.dispatch({ type: 'ДОБАВИТЬ' });
  };
  const remove = () => {
    store.dispatch({ type: 'УМЕНЬШИТЬ' });
  };
  const reset = () => {
    store.dispatch({ type: 'ОБНУЛЕНИЕ' });
  };
  store.subscribe(() => {
    setNum(store.getState().number);
  });
  return (
    <div className='App'>
      <h1>{num}</h1>
      <button onClick={add}>Увеличить на 1</button>
      <button onClick={remove}>Уменьшить на 1</button>
      <button onClick={reset}>Обнуление</button>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} />
    </div>
  );
}

export default App;
