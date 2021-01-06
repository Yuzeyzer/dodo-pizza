import React, { useEffect, useState } from 'react';
import Filter from '../filter';
import Sort from '../sortPopUp';
import Pizzas from '../pizzas';
import setPizzas from '../../redux/actions/pizzas';
import { setCategory } from '../../redux/actions/filters';
import { useDispatch, useSelector, connect } from 'react-redux';

import { fetchPizzas } from '../../redux/actions/pizzas';
import axios from 'axios';

function Menu() {
  const dispatch = useDispatch();

  const hranilishe = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy,
    };
  });
  const [pizzas, setPizzas] = React.useState([]);
  const [snacks, setSnacks] = React.useState([]);
  const [desserts, setDesserts] = React.useState([]);
  const [title, setTitle] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  const { category, sortBy } = useSelector(({ filters }) => filters);

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response.data)
      .then(({ pizzas, snacks, desserts }) => {
        setPizzas(pizzas);
        setSnacks(snacks);
        setDesserts(desserts);
      });
    // dispatch(fetchPizzas(category));
  }, []);

  const seitek = useSelector(({ filters }) => {
    return {
      categoryIndex: filters.category,
    };
  });

  return (
    <section className='menu'>
      <div className='container'>
        <label>
          <input type='text' placeholder='Поиск пиццы' onChange={(e) => handleSearchValue(e)} />
        </label>
        <div className='row menu__row'>
          <Filter />
          <Sort items={[{ name: 'Популярности' }, { name: 'Цене' }, { name: 'Алфавиту' }]} />
        </div>
        <div className='pizzas'>
          <h2 className='pizzas__title'>{title && `Все пиццы`}</h2>
          <div className='row pizzas__row pt-35 ajara'>
            {pizzas
              .filter((element) => {
                if (searchValue === '') {
                  return element;
                } else if (element.name.toLowerCase().includes(searchValue.toLowerCase())) {
                  return element;
                }
              })
              .map((item) => {
                if (seitek.categoryIndex === -1) {
                  return <Pizzas {...item} key={item.id} />;
                } else if (item.category === seitek.categoryIndex) {
                  return <Pizzas {...item} key={item.id} />;
                }
              })}
          </div>
        </div>
        <div className='pizzas'>
          <h2 className='pizzas__title'>Закуски</h2>
          <div className='row pizzas__row pt-35 ajara'>
            {snacks
              .filter((element) => {
                if (searchValue === '') {
                  return element;
                } else if (element.name.toLowerCase().includes(searchValue.toLowerCase())) {
                  return element;
                }
              })
              .map((item) => {
                if (seitek.categoryIndex === -1) {
                  return <Pizzas {...item} key={item.id} />;
                } else if (item.category === seitek.categoryIndex) {
                  return <Pizzas {...item} key={item.id} />;
                }
              })}
          </div>
        </div>
        <div className='pizzas'>
          <h2 className='pizzas__title'>Десерты</h2>
          <div className='row pizzas__row pt-35 ajara'>
            {desserts
              .filter((element) => {
                if (searchValue === '') {
                  return element;
                } else if (element.name.toLowerCase().includes(searchValue.toLowerCase())) {
                  return element;
                }
              })
              .map((item) => {
                if (seitek.categoryIndex === -1) {
                  return <Pizzas {...item} key={item.id} />;
                } else if (item.category === seitek.categoryIndex) {
                  return <Pizzas {...item} key={item.id} />;
                }
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default connect()(Menu);

//  {.map((item) => {
//                 return <Pizzas {...item} key={item.id} />;
//               })}
