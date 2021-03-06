import React from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

type Props = {
  active?: boolean;
  variant?: 'outline' | 'fill';
  type?: 'primary' | 'danger';
  size?: 'small' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<Props> = (props) => {
  const {
    children,
    fullWidth,
    variant = 'outline',
    type = 'primary',
    size = 'large',
    disabled,
    onClick,
    className,
  } = props;

  return (
    <button
      className={clsx({
        [classes.component]: true,
        [classes[variant]]: true,
        [classes[type]]: true,
        [classes[size]]: true,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [`${className}`]: !!className,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
