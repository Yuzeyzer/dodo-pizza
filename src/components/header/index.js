import React from 'react';
import logo from '../../assets/logo.svg';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row row'>
          <div className='header__logo logo'>
            <img src={logo} alt='logo' />
            <div className='logo__info'>
              <h2 className='logo__title'>REACT PIZZA</h2>
              <p className='logo__description'>Самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
