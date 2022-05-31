import React from 'react';

import classes from './Start.module.scss';

type EndProps = {
  start: () => void;
};


const Start: React.FC<EndProps> = ({ start }) => (
  <button onClick={start} className={classes.button}>START</button>
);

export default Start;