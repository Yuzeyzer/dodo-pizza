import React from 'react';
import Filter from '../filter';
import Sort from '../sortPopUp';
import Pizzas from '../pizzas';
import { pizzas as pizzasDataBase } from './const';

function Menu() {
  return (
    <section className='menu'>
      <div className='container'>
        <div className='row menu__row'>
          <Filter />
          <Sort />
        </div>
        <Pizzas {...pizzasDataBase} />
      </div>
    </section>
  );
}

export default Menu;
