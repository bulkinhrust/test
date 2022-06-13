import React, {useEffect} from 'react';

import { Answer } from '../../types';
import classes from './End.module.scss';
import Invitation from './Invitation';
import Details from './Details';

type EndProps = {
  answers: { [key in Answer]: number };
  age?: Answer;
  reset: () => void;
};

const endText: { [key in Answer | 'none']: string } = {
  1: 'Ты пьянчуга',
  2: 'Ты обжора',
  3: 'Ты приторный',
  none: 'Ты вообще кто такой?',
};

const End: React.FC<EndProps> = ({ answers, age, reset }) => {
  useEffect(() => {
    if (!localStorage.getItem('result')) {
      const maxValue = Math.max(...Object.values(answers));
      const leader = (Object.keys(answers) as Answer[]).find((answerKey) => (answers[answerKey] === maxValue));
      localStorage.setItem('result', `pic${age}${endText[leader || 'none']}`);
    }
  }, []);
  return (
    <div className={classes.container}>
      <Invitation reset={reset} />
      <hr />
      <Details />
    </div>
  );
}

export default End;