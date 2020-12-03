import React, { useState } from 'react';
import classNames from 'classnames';

const Pizzas = ({ id, imageUrl, name, price, types, sizes }) => {
  let [counter, setCounter] = useState(0);
  const [sizeActive, setSizeActive] = useState(0);
  const [typesActive, setTypesActive] = useState(types[0]);

  const sizesAvailable = [26, 30, 40];
  const typesNames = ['тонкое', 'традиционное'];

  const typesClick = (i) => {
    setTypesActive(i);
  };
  const sizeClick = (i) => {
    setSizeActive(i);
  };
  const counterClick = () => {
    return setCounter(counter + 1);
  };
  return (
    <div className='pizzas__block col-3'>
      <div className='pizzas__item'>
        <img src={imageUrl} alt='pizza1' className='pizzas__image' />
        <h3 className='pizzas__name'>{name}</h3>
        <div className='pizzas__parameters'>
          <ul className='pizzas__types'>
            {typesNames.map((type, index) => {
              return (
                <li
                  onClick={() => typesClick(index)}
                  key={type}
                  className={classNames({
                    'is-active': index === typesActive,
                    'is-disabled': !types.includes(index),
                  })}>
                  {type}
                </li>
              );
            })}
          </ul>
          <ul className='pizzas__sizes'>
            {sizesAvailable.map((size, index) => {
              // console.log(size);
              // console.log(sizes, 'sizes');
              return (
                <li
                  onClick={() => sizeClick(index)}
                  key={size}
                  className={classNames({
                    'is-active': index === sizeActive && sizes.includes(size),
                    'is-disabled': !sizes.includes(size),
                  })}>
                  {size} см.
                </li>
              );
            })}
          </ul>
        </div>
        <div className='row pizzas__row pt-15'>
          <span className='pizzas__price'>от {price} ₽</span>
          <button onClick={() => counterClick()} className='pizzas__button'>
            <span>+</span>
            <span className='button__add'>Добавить</span>
            <span className={`button__counter ${counter !== 0 ? 'is-active' : ''}`}>{counter}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizzas;
