import React from 'react';

import classes from './Share.module.scss';

type Props = {
  className?: string;
};

const Share: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.component}>
      <path d="M8.37497 15.5L8.37497 2M8.37497 2L3.99997 6M8.37497 2L13 6" stroke="#6781C6" strokeWidth="2" className={className}/>
      <path d="M13.5238 8.72461C14.5472 9.74805 15.2442 11.052 15.5266 12.4715C15.8089 13.8911 15.664 15.3625 15.1101 16.6997C14.5562 18.0369 13.6183 19.1798 12.4148 19.9839C11.2114 20.788 9.79654 21.2172 8.34918 21.2172C6.90182 21.2172 5.48696 20.788 4.28352 19.9839C3.08009 19.1798 2.14212 18.0369 1.58824 16.6997C1.03436 15.3625 0.889439 13.8911 1.17181 12.4715C1.45417 11.052 2.15114 9.74805 3.17458 8.72461" stroke="#6781C6" strokeWidth="2"/>
    </svg>
  );
};

export default Share;
