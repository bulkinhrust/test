import React from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.scss';
import Button from '../Button';

type Props = {
  onClose: () => void;
  onSubmit?: () => void;
  title: string;
  submitTitle?: string;
  cancelTitle?: string;
  visible?: boolean;
};

const Modal: React.FC<Props> = (props) => {
  const {
    children,
    onClose,
    onSubmit,
    title,
    submitTitle,
    cancelTitle,
    visible,
  } = props;

  const root = document.getElementById('root');
  if (!root || !visible) {
    return null;
  }

  const content = (
    <div className={classes.popover} onClick={onClose}>
      <div className={classes.modal}>
        <h3 className={classes.title}>{title}</h3>
        {children}
        <div className={classes.actions}>
          {submitTitle && <Button type="danger" variant="fill" size="small" onClick={onSubmit}>{submitTitle}</Button>}
          {cancelTitle && <Button type="danger" size="small" onClick={onClose}>{cancelTitle}</Button>}
        </div>
      </div>
    </div>
  );

  return createPortal(content, root);
};

export default Modal;
