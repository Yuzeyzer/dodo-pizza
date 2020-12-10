import React, { useState } from 'react';
import { filterNames } from './const.js';
import { setCategory } from '../../redux/actions/filters';
import { useDispatch,useSelector } from 'react-redux';

function Filter() {
  const [names, setNames] = useState(filterNames);

  const dispatch = useDispatch();
  const seitek = useSelector(({filters}) => {
    return {
      categoryIndex: filters.category
    }
  })


  console.log(seitek)
  const handleClick = (index) => {
    dispatch(setCategory(index));
    console.log(seitek)
  };

  return (
    <div className='filter'>
      <ul className='filter__list'>
        {names.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => handleClick(index)}
              className={`filter__item ${index === seitek.categoryIndex  ? 'is-active' : ''}`}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
