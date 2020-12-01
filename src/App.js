import './index.scss';
import Header from './components/header';
import Cart from './pages/cart';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import React,{useEffect} from 'react';

function App() {
  let path;
  useEffect(() => {
    path = window.location.pathname;
  },[window.location.pathname]);
  return (
    <div className='App'>
      <Header />
      <Route exact path="/" component={ Home } />
      <Route exact path="/cart" component={ Cart } />
    </div>
  );
}

export default App;
