import React from 'react';
import clsx from 'clsx';

import classes from './Card.module.scss';

type Props = {
  className?: string;
};

const Card: React.FC<Props> = ({ children, className }) => (
  <div className={clsx(classes.component, className)}>
    {children}
  </div>
);

export default Card;
