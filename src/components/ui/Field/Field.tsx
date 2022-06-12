import React from 'react';
import clsx from 'clsx';

import classes from './Field.module.scss';

type Props = {
  active?: boolean;
  onClick: () => void;
  className?: string;
};

const Field: React.FC<Props> = (props) => {
  const {
    children,
    active,
    onClick,
    className,
  } = props;

  return (
    <button
      className={clsx({
        [classes.component]: true,
        [classes.active]: !!active,
        [`${className}`]: !!className,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Field;
