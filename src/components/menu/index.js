import React, { useEffect, useState } from 'react';
import Filter from '../filter';
import Sort from '../sortPopUp';
import Pizzas from '../pizzas';
import PropTypes from 'prop-types';

function Menu() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(async () => {
    return await fetch('http://localhost:3000/database.json')
      .then((response) => response.json())
      .then(({ pizzas }) => pizzas)
      .then((array) => setPizzas(array));
  }, []);

  return (
    <section className='menu'>
      <div className='container'>
        <div className='row menu__row'>
          <Filter />
          <Sort items={[{name:'Популярности'}, {name:'Цене'}, {name:'Алфавиту'}]} />
        </div>
        <div className='pizzas'>
          <h2 className='pizzas__title'>Все пиццы</h2>
          <div className='row pizzas__row pt-35 ajara'>
            {pizzas &&
              pizzas.map((item) => {
                return <Pizzas {...item} key={item.id} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;


