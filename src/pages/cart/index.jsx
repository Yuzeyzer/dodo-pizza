import React from 'react';
import pizza from '../../assets/pizza-1.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <section className='cart'>
      <div className='cart__container'>
        <div className='cart__header header'>
          <div className='cart__left flex'>
            <svg
              width='31'
              height='31'
              viewBox='0 0 31 31'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.6667 28.7916C12.0014 28.7916 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7916 10.6667 28.7916Z'
                stroke='#3F3F3F'
                stroke-width='2.8'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M25.1667 28.7916C26.5014 28.7916 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7916 25.1667 28.7916Z'
                stroke='#3F3F3F'
                stroke-width='2.8'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7.85117 8.24998H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1552 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31081C7.24334 3.72989 6.95872 3.19642 6.51862 2.80966C6.07852 2.4229 5.5129 2.2092 4.927 2.20831H2.20825'
                stroke='#3F3F3F'
                stroke-width='2.8'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>

            <div>
              <h2>Корзина</h2>
            </div>
          </div>
          <div className='cart__right flex'>
            <svg
              className='trash'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 5H4.16667H17.5'
                stroke='#B6B6B6'
                stroke-width='1.2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M6.66663 5.00002V3.33335C6.66663 2.89133 6.84222 2.4674 7.15478 2.15484C7.46734 1.84228 7.89127 1.66669 8.33329 1.66669H11.6666C12.1087 1.66669 12.5326 1.84228 12.8451 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1578 14.6087 18.3334 14.1666 18.3334H5.83329C5.39127 18.3334 4.96734 18.1578 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00002H15.8333Z'
                stroke='#B6B6B6'
                stroke-width='1.2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M8.33337 9.16669V14.1667'
                stroke='#B6B6B6'
                stroke-width='1.2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M11.6666 9.16669V14.1667'
                stroke='#B6B6B6'
                stroke-width='1.2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <div>
              <span>Очистить корзину</span>
            </div>
          </div>
        </div>
        <div className='cart__sector'>
          <div className='cart__item flex'>
            <div className='cart__pizza flex'>
              <img className='cart__img' src={pizza} alt='' />
              <div className='cart__style'>
                <h2 className='cart__name'>Pizza</h2>
                <span className='cart__parametres'>тонкое тесто, 26 см.</span>
              </div>
            </div>
            <div className='cart__counter flex'>
              <span className='cart__minus'>-</span>2<span className='cart__plus'>+</span>
            </div>
            <div className='cart__sum'>770 ₽</div>
            <span className='cart__deleter'>+</span>
          </div>
          <div className='cart__item flex'>
            <div className='cart__pizza flex'>
              <img className='cart__img' src={pizza} alt='' />
              <div className='cart__style'>
                <h2 className='cart__name'>Pizza</h2>
                <span className='cart__parametres'>тонкое тесто, 26 см.</span>
              </div>
            </div>
            <div className='cart__counter flex'>
              <span className='cart__minus'>-</span>2<span className='cart__plus'>+</span>
            </div>
            <div className='cart__sum'>770 ₽</div>
            <span className='cart__deleter'>+</span>
          </div>
          <div className='cart__item flex'>
            <div className='cart__pizza flex'>
              <img className='cart__img' src={pizza} alt='' />
              <div className='cart__style'>
                <h2 className='cart__name'>Pizza</h2>
                <span className='cart__parametres'>тонкое тесто, 26 см.</span>
              </div>
            </div>
            <div className='cart__counter flex'>
              <span className='cart__minus'>-</span>2<span className='cart__plus'>+</span>
            </div>
            <div className='cart__sum'>770 ₽</div>
            <span className='cart__deleter'>+</span>
          </div>
          <div className='cart__item flex'>
            <div className='cart__pizza flex'>
              <img className='cart__img' src={pizza} alt='' />
              <div className='cart__style'>
                <h2 className='cart__name'>Pizza</h2>
                <span className='cart__parametres'>тонкое тесто, 26 см.</span>
              </div>
            </div>
            <div className='cart__counter flex'>
              <span className='cart__minus'>-</span>2<span className='cart__plus'>+</span>
            </div>
            <div className='cart__sum'>770 ₽</div>
            <span className='cart__deleter'>+</span>
          </div>
        </div>
        <div className='cart__result result flex'>
          <div className='result__left'>
            <div>
              <span>
                Всего пицц: <b>3 шт.</b>
              </span>
            </div>
          </div>
          <div className='result__right'>
            <div>
              <span>
                Сумма заказа: <b className='cart__total'>900 ₽</b>
              </span>
            </div>
          </div>
        </div>
        <div className='cart__btn flex'>
          <Link to='/' className='cart__back'>
            <svg
              width='8'
              height='14'
              viewBox='0 0 8 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M7 13L1 6.93015L6.86175 1'
                stroke='#FE5F1E'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            Вернуться назад
          </Link>
          <button className='cart__offer'>Оплатить сейчас</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
