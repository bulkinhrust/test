import React, { useState } from 'react';
import clsx from 'clsx';

import { Answer, Question as QuestionType } from '../../types';
import classes from './Question.module.scss';
import Card from '../ui/Card';
import Field from '../ui/Field';
import Button from '../ui/Button';
import Arrow from '../ui/Arrow';

type QuestionProps = {
  question: QuestionType;
  handleAnswer: (answer: Answer) => void;
  goBack: () => void;
};

const Question: React.FC<QuestionProps> = (props) => {
  const { question: { question, answers }, handleAnswer, goBack } = props;
  const [active, setActive] = useState<Answer | null>(null);

  const handleGoBack = () => {
    setActive(null);
    goBack();
  };

  const handleGoForward = () => {
    if (active) {
      handleAnswer(active);
    }
    setActive(null);
  };

  return (
    <Card>
      <h2 className={clsx(classes.title, question.length > 2 ? classes.smallTitle : '')}>
        {question.map((string) => <span key={string}>{string}</span>)}
      </h2>
      <ul className={classes.list}>
        <Field onClick={() => setActive(answers.a.type)} active={active === answers.a.type}>{answers.a.title}</Field>
        <Field onClick={() => setActive(answers.b.type)} active={active === answers.b.type}>{answers.b.title}</Field>
        <Field onClick={() => setActive(answers.c.type)} active={active === answers.c.type}>{answers.c.title}</Field>
      </ul>
      <div className={classes.buttons}>
        <Button onClick={handleGoBack}>
          <Arrow direction="left" />
        </Button>
        <Button onClick={handleGoForward} disabled={!active}>
          <Arrow direction="right" />
        </Button>
      </div>
    </Card>
  );
}

export default Question;