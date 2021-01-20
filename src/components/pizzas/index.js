import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Sizes from './sizes';
import Types from './types';

const Pizzas = ({ id, imageUrl, name, price, types, sizes, onClickAddPizza }) => {
  let [counter, setCounter] = useState(0);
  const counterClick = () => {
    return setCounter(counter + 1);
  };

  const sendDataToRedux = () => {
    const obj = {
      id,
      imageUrl,
      name,
      price,
      types,
      sizes,
    };

    onClickAddPizza(obj);
  };
  return (
    <div className='pizzas__block col-3'>
      <div className='pizzas__item'>
        <img src={imageUrl} alt='pizza1' className='pizzas__image' />
        <h3 className='pizzas__name'>{name}</h3>
        <div className={`${types.length > 0 ? 'pizzas__parameters' : 'pizzas__description'}`}>
          {types.length > 0 ? <Types types={types} /> : ''}
          {sizes.length > 0 ? <Sizes sizes={sizes} /> : ''}
          {sizes.length && types.length > 0 ? '' : ''}
        </div>
        <div className='row pizzas__row pt-15'>
          <span className='pizzas__price'>от {price} ₽</span>
          <button
            onClick={() => {
              counterClick();
              sendDataToRedux();
            }}
            className='pizzas__button'>
            <span>+</span>
            <span className='button__add'>Добавить</span>
            <span className={`button__counter ${counter !== 0 ? 'is-active' : ''}`}>{counter}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Pizzas.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
};

Pizzas.defaultProps = {
  types: [],
  sizes: [],
  price: 100,
  name: 'Тут имя пиццы',
};

export default Pizzas;
