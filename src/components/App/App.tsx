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
  const [step, setStep] = useState<'start' | number>('start');
  const [age, setAge] = useState<Answer>();
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const handleAnswer = (type: Answer) => {
    if (step === 0) {
      setAge(type);
    } else {
      setAnswers({
        ...answers,
        [type]: answers[type] + 1,
      });
    }

    setStep(+step + 1);
  };

  const goBack = () => {
    setStep(step > 0 ? +step - 1 : 'start');
  };

  const start = () => {
    setStep(0);
  };

  const reset = () => {
    setStep('start');
    setAnswers(initialAnswers);
  };

  return (
    <div className={classes.container}>
      {step === 'start' && <Start start={start} />}
      {step > -1 && step < questions.length && (
        <QuestionComponent
          question={questions[+step]}
          handleAnswer={handleAnswer}
          goBack={goBack}
        />
      )}
      {step === questions.length && <End answers={answers} reset={reset} age={age} />}
    </div>
  );
}

export default App;
