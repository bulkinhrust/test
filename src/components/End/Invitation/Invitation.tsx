import React from 'react';

import invitations from '../invitations';
import Button from '../../ui/Button';
import classes from './Invitation.module.scss';

type Props = {
  reset: () => void;
};

const Invitation: React.FC<Props> = (props) => {
  const { reset } = props;

  return (
    <div className={classes.container}>
      <img src={invitations.pic21} alt="открытка" className={classes.invitation} />
      <div className={classes.bar}>
        <Button onClick={() => console.log('')} variant="fill" fullWidth>Скачать</Button>
        <Button onClick={() => console.log('')} fullWidth>Отправить</Button>
      </div>
      <Button onClick={reset} type="danger" fullWidth>Хочу пройти тест ещё раз!</Button>
    </div>
  );
};

export default Invitation;
