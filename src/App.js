import './index.scss';
import Header from './components/header';
import Cart from './pages/cart';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import React from 'react';
import store from './redux/store';

import SignIn from './components/signin';

function App() {
  return (
    <div className='App'>
      <Header />
      <SignIn />
      {/* <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} /> */}
    </div>
  );
}

export default App;
