import './index.scss';
import Header from './components/header';
import Cart from './pages/cart';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import React from 'react';


function App() {
  return (
    <div className='App'>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} />
    </div>
  );
}

export default App;
