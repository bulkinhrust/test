import React from 'react';

import classes from './Card.module.scss';

const Card: React.FC = ({ children }) => (
  <div className={classes.component}>
    {children}
  </div>
);

export default Card;
