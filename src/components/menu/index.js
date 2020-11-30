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
        <div className='pizzas'>
          <h2 className='pizzas__title'>Все пиццы</h2>
          <div className='row pizzas__row pt-35 ajara'>
            {pizzasDataBase.map((item) => {
              return <Pizzas {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
