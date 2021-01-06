import React from 'react';
import classNames from 'classnames';

const Sizes = ({ sizes }) => {
  const [sizeActive, setSizeActive] = React.useState(0);
  const sizesAvailable = [26, 30, 40];
  const sizeClick = (i) => {
    setSizeActive(i);
  };
  return (
    <ul className='pizzas__sizes'>
      {sizesAvailable.map((size, index) => {
        if (sizes.length > 0) {
          return (
            <li
              onClick={() => sizeClick(index)}
              key={size}
              className={classNames({
                'is-active': index === sizeActive && sizes.includes(size),
                'is-disabled': !sizes.includes(size),
              })}>
              {size} см.
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Sizes;
