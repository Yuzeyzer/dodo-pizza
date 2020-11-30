import React, { useState } from 'react';
import classNames from 'classnames';

const Pizzas = ({ id, imgSrc, name, price, typesNames, typesAvailable, sizes }) => {
  let [counter, setCounter] = useState(0);
  const [sizeActive, setSizeActive] = useState(0);
  const [typesActive, setTypesActive] = useState(0);
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
        <img src={imgSrc} alt='pizza1' className='pizzas__image' />
        <h3 className='pizzas__name'>{name}</h3>
        <div className='pizzas__parameters'>
          <ul className='pizzas__types'>
            {typesNames.map((type, index) => {
              return (
                <li
                  onClick={() => typesClick(index)}
                  key={type}
                  className={classNames({
                    isActive: index === typesActive,
                    isDisabled: !typesAvailable.includes(index),
                  })}>
                  {type}
                </li>
              );
            })}
          </ul>
          <ul className='pizzas__sizes'>
            {sizes.map((size, index) => {
              return (
                <li
                  onClick={() => sizeClick(index)}
                  key={size}
                  className={index === sizeActive ? 'is-active' : ''}>
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
