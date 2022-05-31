import React from 'react';

import { Answer } from '../../types';
import classes from './End.module.scss';

type EndProps = {
  answers: { [key in Answer]: number };
  reset: () => void;
};

const endText: { [key in Answer | 'none']: string } = {
  alcoholic: 'Ты пьянчуга',
  glutton: 'Ты обжора',
  romantic: 'Ты приторный',
  none: 'Ты вообще кто такой?',
};

const End: React.FC<EndProps> = ({ answers, reset }) => {
  const maxValue = Math.max(...Object.values(answers));
  const leader = (Object.keys(answers) as Answer[]).find((answerKey) => (answers[answerKey] === maxValue));
  return (
    <div className={classes.container}>
      <h2>{endText[leader || 'none']}</h2>
      <button onClick={reset}>Пройти тест еще раз</button>
    </div>
  );
}

export default End;