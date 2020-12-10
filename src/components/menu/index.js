import React, { useEffect, useState } from 'react';
import Filter from '../filter';
import Sort from '../sortPopUp';
import Pizzas from '../pizzas';
import setPizzas from '../../redux/actions/pizzas';
// import { connect } from 'redux';
import { useDispatch, useSelector, connect } from 'react-redux';

function Menu() {
  const dispatch = useDispatch();
  
  const hranilishe = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy,
    };
  });

  console.log(hranilishe.items);

  useEffect(() => {
    fetch('http://localhost:3000/database.json')
      .then((response) => response.json())
      .then(({ pizzas }) => pizzas)
      .then((array) => {
        dispatch(setPizzas(array));
      });
  }, []);

  return (
    <section className='menu'>
      <div className='container'>
        <div className='row menu__row'>
          <Filter />
          <Sort items={[{ name: 'Популярности' }, { name: 'Цене' }, { name: 'Алфавиту' }]} />
        </div>
        <div className='pizzas'>
          <h2 className='pizzas__title'>Все пиццы</h2>
          <div className='row pizzas__row pt-35 ajara'>
            {hranilishe.items &&
              hranilishe.items.map((item) => {
                return <Pizzas {...item} key={item.id} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default connect()(Menu);
