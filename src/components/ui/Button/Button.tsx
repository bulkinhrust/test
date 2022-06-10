import React from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

type Props = {
  active?: boolean;
  bordered?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const Button: React.FC<Props> = (props) => {
  const {
    children,
    active,
    bordered,
    fullWidth,
    disabled,
    onClick,
  } = props;

  return (
    <button
      className={clsx({
        [classes.component]: true,
        active,
        [classes.bordered]: bordered,
        fullWidth,
        disabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
