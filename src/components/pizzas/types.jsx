import React from 'react';
import classNames from 'classnames';

const Types = ({ types }) => {
  const [typesActive, setTypesActive] = React.useState(types[0]);
  const typesNames = ['тонкое', 'традиционное'];
  const typesClick = (i) => {
    setTypesActive(i);
  };
  return (
    <ul className='pizzas__types'>
      {typesNames.map((type, index) => {
        if (types.length > 0) {
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
        }
      })}
    </ul>
  );
};

export default Types;
