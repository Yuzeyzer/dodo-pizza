import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';



function SortPopUp({ items }) {
  const [sort, setSort] = useState(false);
  const [active, setActive] = useState(0);
  const sortPop = useRef();

  const handleClick = () => {
    setSort(sort ? false : true);
  };

  const onSelectItem = (index) => {
    setActive(index);
    setSort(false);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortPop.current)) {
      setSort(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  

  return (
    <div ref={sortPop} className='sort'>
      <div onClick={() => handleClick()} className='sort__label'>
        <svg
          className={`sort__arrow ${sort ? 'is-active' : ''}`}
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{items[active].name}</span>
      </div>
      <div className={`sort__popup ${sort ? 'is-active' : ''}`}>
        <ul>
          {items.map((item, index) => {
            // console.log(item.name)
            return (
              <li key={item + index} onClick={() => onSelectItem(index)} className={index === active ? 'active' : ''}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


export default SortPopUp;


SortPopUp.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}

SortPopUp.defaultProps = {
  items: [{name:'Кролик'},{name:'Сендвич'},{name:'Кола'}],
};

// Pizzas.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   types: PropTypes.array.isRequired,
//   sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
//   price: PropTypes.number.isRequired,
// };