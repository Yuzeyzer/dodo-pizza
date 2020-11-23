import React from 'react';
import hero1 from '../../assets/wink.webp';
import hero2 from '../../assets/delivery.webp';
import hero3 from '../../assets/big20.webp';
import hero4 from '../../assets/dodster.webp';
import hero5 from '../../assets/carbonara.webp';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='row hero__row'>
          <div className='col-8 hero__column'>
            <a href='' className='hero__item'>
              <img src={hero1} alt='' />
            </a>
          </div>
          <div className='col-4 hero__column'>
            <a href='' className='hero__item'>
              <img src={hero2} alt='' />
            </a>
          </div>
          <div className='col-4 hero__column'>
            <a href='' className='hero__item'>
              <img src={hero3} alt='' />
            </a>
          </div>
          <div className='col-4 hero__column'>
            <a href='' className='hero__item'>
              <img src={hero4} alt='' />
            </a>
          </div>
          <div className='col-4 hero__column'>
            <a href='' className='hero__item'>
              <img src={hero5} alt='' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
