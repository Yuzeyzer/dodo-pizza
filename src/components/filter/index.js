import React, { useState } from 'react';
import { filterNames } from './const.js';

function Filter() {
  const [input, setInput] = useState('');
  const [names, setNames] = useState(filterNames);
  const [elIndex, setElIndex] = useState(0);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleEnter = (event) => {
    setInput(event.target.value);
    if (event.key === 'Enter') {
      setNames([...names, event.target.value]);
      setInput('');
    }
  };

  const handleClick = (index) => {
    setElIndex(index);
  };

  return (
    <div className='filter'>
      {/* <input
        onKeyPress={handleEnter}
        type='text'
        placeholder='Добавь в фильтр новый элемент'
        value={input}
        onChange={handleChange}
      /> */}
      <ul className='filter__list'>
        {names.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => handleClick(index)}
              className={`filter__item ${index === elIndex ? 'is-active' : ''}`}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
