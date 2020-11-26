import React from 'react';
import Filter from '../filter';
import Sort from '../sortPopUp';
import Pizzas from '../pizzas';

function Menu() {
  return (
    <section className='menu'>
      <div className='container'>
        <div className='row menu__row'>
          <Filter />
          <Sort />
        </div>
        <Pizzas />
      </div>
    </section>
  );
}

export default Menu;
