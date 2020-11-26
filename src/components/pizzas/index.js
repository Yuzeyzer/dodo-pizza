import React from 'react';
import pizza1 from '../../assets/pizza-1.png';

function Pizzas() {
  return (
    <div className='pizzas'>
      <h2 className='pizzas__title'>Все пиццы</h2>
      <div className='row pizzas__row'>
        <div className='pizzas__block col-3'>
          <div className='pizzas__item'>
            <img src={pizza1} alt='pizza1' className='pizzas__image' />
            <h3 className='pizzas__name'>Чизбургер-пицца</h3>
            <div className='pizzas__parameters'>
              <ul className='pizzas__types'>
                <li className="is-active">Тонкое</li>
                <li>Традиционное</li>
              </ul>
              <ul className='pizzas__sizes'>
                <li>26 см.</li>
                <li className="is-active">30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className='row pizzas__row'>
              <span className='pizzas__price'>от 395 ₽</span>
              <button className='button'>
                <span>+</span>
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizzas;
