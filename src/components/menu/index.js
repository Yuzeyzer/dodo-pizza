import React, { useEffect, useState } from 'react';
import Filter from '../filter';
import Sort from '../sortPopUp';
import Pizzas from '../pizzas';
import { setCategory } from '../../redux/actions/filters';
import { useDispatch, useSelector, connect } from 'react-redux';
import { addPizzaToCart } from '../../redux/actions/cart';
import { fetchPizzas } from '../../redux/actions/pizzas';

function Menu() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);

  const hranilishe = useSelector(({ filters }) => {
    return {
      sortBy: filters.sortBy,
    };
  });
  const [title, setTitle] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  const { category, sortBy } = useSelector(({ filters }) => filters);

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
  ];

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy,category));
  }, [sortBy,category]);

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
          <Sort items={sortItems} />
        </div>
        <div className='pizzas'>
          <h2 className='pizzas__title'>{title && `Все пиццы`}</h2>
          <div className='row pizzas__row pt-35 ajara'>
            {items
              .filter((element) => {
                if (searchValue === '') {
                  return element;
                } else if (element.name.toLowerCase().includes(searchValue.toLowerCase())) {
                  return element;
                }
              })
              .map((item) => {
                if (seitek.categoryIndex === -1) {
                  return <Pizzas onClickAddPizza={handleAddPizzaToCart} {...item} key={item.id} />;
                } else if (item.category === seitek.categoryIndex) {
                  return <Pizzas onClickAddPizza={handleAddPizzaToCart} {...item} key={item.id} />;
                }
              })}
          </div>
        </div>
        {/* <div className='pizzas'>
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
        </div> */}
      </div>
    </section>
  );
}

export default connect()(Menu);

//  {.map((item) => {
//                 return <Pizzas {...item} key={item.id} />;
//               })}

// const arr = [
//   {
//     price: 100,
//   },
//   {
//     price: 200,
//   },
//   {
//     price: 300,
//   },
// ];

// const result = arr.reduce((sum, item) => {
//   return sum + item.price;
// }, 0);

// let sum = 0;

// const result = arr.map((item) => sum += item.price);

// console.log(sum);
