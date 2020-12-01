import React, { useEffect, useState } from 'react';
import Filter from '../filter';
import Sort from '../sortPopUp';
import Pizzas from '../pizzas';

function Menu() {
  const [pizzas, setPizzas] = useState([]);
  let aiza = [];
  useEffect(async () => {
    return await fetch('http://localhost:3000/database.json')
      .then((response) => response.json())
      .then(({ pizzas }) => pizzas)
      .then((array) => setPizzas(array));
  }, []);

  console.log(pizzas);

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
