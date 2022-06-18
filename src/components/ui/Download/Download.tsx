import React from 'react';
import clsx from 'clsx';

import classes from './Download.module.scss';

type Props = {
  className?: string;
};

const Download: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <svg width="23" height="26" viewBox="0 0 23 26" xmlns="http://www.w3.org/2000/svg" className={clsx(classes.component, className)}>
      <path d="M11.375 0L11.375 16M11.375 16L17.75 9.51694M11.375 16L5 9.51694" stroke="white" strokeWidth="2"/>
    </svg>
  );
};

export default Download;
