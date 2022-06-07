import React from 'react';
import clsx from 'clsx';

import Card from '../ui/Card';
import classes from './Start.module.scss';
import hourglass from './assets/hourglass.svg';
import brain from './assets/brain.svg';

type EndProps = {
  start: () => void;
};


const Start: React.FC<EndProps> = ({ start }) => (
  <Card>
    <h1>Привет!</h1>
    <span className={clsx(classes.middleText)}>
      Это единственный тест в интернете,<br />
      который стоит пройти
    </span>
    <span className={clsx(classes.middleText, classes.blueText)}>Вам понадобятся:</span>
    <div className={clsx(classes.needBlock, classes.smallText, classes.blueText)}>
      <img src={hourglass} />
      <img src={brain} />
      <span>5 минут</span>
      <span>(опционально)</span>
    </div>
    <span className={clsx(classes.smallText, classes.lightText)}>
      Отвечайте честно, выбирайте мудро<br />
      и получите уникальное предложение,<br />
      от которого невозможно отказаться
    </span>
    <button onClick={start} className={classes.button}>Чтож, приступим --&gt;</button>
  </Card>
);

export default Start;