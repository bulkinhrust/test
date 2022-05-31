import React, { useState } from 'react';

import QuestionComponent from '../Question';
import Start from '../Start';
import End from '../End';
import { Answer } from '../../types';
import { questions, initialAnswers } from '../../constants';
import classes from './App.module.scss';

type Answers = {
  [key in Answer]: number;
};

const App: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [age, setAge] = useState();
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const handleAnswer = (type: Answer) => {
    console.log(type);
    setAnswers({
      ...answers,
      [type]: answers[type] + 1,
    });
    setStep(step + 1);
  };

  const start = () => {
    setStep(1)
  };

  const reset = () => {
    setStep(0);
    setAnswers(initialAnswers);
  };

  return (
    <div className={classes.container}>
      {step === 0 && <Start start={start} />}
      {step === 1 && <QuestionComponent question={questions[0]} handleAnswer={handleAnswer} />}
      {step === 2 && <QuestionComponent question={questions[1]} handleAnswer={handleAnswer} />}
      {step === 3 && <QuestionComponent question={questions[2]} handleAnswer={handleAnswer} />}
      {step === 4 && <QuestionComponent question={questions[3]} handleAnswer={handleAnswer} />}
      {step === 5 && <End answers={answers} reset={reset} />}
    </div>
  );
}

export default App;
