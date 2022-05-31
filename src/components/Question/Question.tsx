import React from 'react';

import { Answer, Question as QuestionType } from '../../types';
import classes from './Question.module.scss';

type QuestionProps = {
  question: QuestionType;
  handleAnswer: (answer: Answer) => void;
};

const Question: React.FC<QuestionProps> = (props) => {
  const { question: { question, answers }, handleAnswer } = props;
  return (
    <div className={classes.container}>
      <h2>{question}</h2>
      <ul className={classes.list}>
        <button className={classes.button} onClick={() => handleAnswer(answers.a.type)}>a) {answers.a.title}</button>
        <button className={classes.button} onClick={() => handleAnswer(answers.b.type)}>b) {answers.b.title}</button>
        <button className={classes.button} onClick={() => handleAnswer(answers.c.type)}>c) {answers.c.title}</button>
      </ul>
    </div>
  );
}

export default Question;