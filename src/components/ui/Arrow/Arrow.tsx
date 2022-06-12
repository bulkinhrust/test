import React from 'react';
import clsx from 'clsx';

import classes from './Arrow.module.scss';

type Props = {
  direction: 'right' | 'left';
  className?: string;
};

const Arrow: React.FC<Props> = (props) => {
  const { direction, className } = props;

  return (
    <svg width="33" height="21" viewBox="0 0 33 21" xmlns="http://www.w3.org/2000/svg" className={clsx(classes.component, className)}>
      {direction === 'right'
        ? <path d="M0 10.5H30M30 10.5L21.3559 2M30 10.5L21.3559 19" strokeWidth="3"/>
        : <path d="M33 10.5L3 10.5M3 10.5L11.6441 19M3 10.5L11.6441 2" strokeWidth="3"/>}
    </svg>
  );
};

export default Arrow;
