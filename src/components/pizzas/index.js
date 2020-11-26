import React, { useState } from 'react';

const Pizzas = ( obj ) => {
  const [typesActive, setTypesActive] = useState(0);
  console.log(obj);
  const typesClick = (i) => {
    setTypesActive(i);
  };
  return (
    <div className='pizzas'>
      <h2 className='pizzas__title'>Все пиццы</h2>
      <div className='row pizzas__row pt-35 ajara'>
        {obj.map((item) => {
          return (
            <div key={item.id} className='pizzas__block col-3'>
              <div className='pizzas__item'>
                <img src={item.imgSrc} alt='pizza1' className='pizzas__image' />
                <h3 className='pizzas__name'>{item.name}</h3>
                <div className='pizzas__parameters'>
                  <ul className='pizzas__types'>
                    {item.types.map((type, index) => {
                      return (
                        <li
                          onClick={() => typesClick(index)}
                          key={type}
                          className={index === typesActive ? 'is-active' : ''}>
                          {type}
                        </li>
                      );
                    })}
                  </ul>
                  <ul className='pizzas__sizes'>
                    {item.sizes.map((size, index) => {
                      return (
                        <li key={size} className={index === 2 ? 'is-active' : ''}>
                          {size} см.
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className='row pizzas__row pt-15'>
                  <span className='pizzas__price'>от {item.price} ₽</span>
                  <button className='pizzas__button'>
                    <span>+</span>
                    <span className='button__add'>Добавить</span>
                    <span className='button__counter'>4</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pizzas;
