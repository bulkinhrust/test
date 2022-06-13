import React, {useEffect, useState} from 'react';

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
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState<'start' | number>('start');
  const [age, setAge] = useState<Answer>();
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  useEffect(() => {
    const result = localStorage.getItem('result');
    if (!result) {
      setStep('start');
    } else {
      setAnswers(JSON.parse(localStorage.getItem('answers') || '') as Answers);
      setAge(JSON.parse(localStorage.getItem('age') || '') as Answer);
      setStep(questions.length);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  const handleAnswer = (type: Answer) => {
    if (step === 0) {
      setAge(type);
      localStorage.setItem('age', type);
    } else {
      const newAnswers = {
        ...answers,
        [type]: answers[type] + 1,
      };
      setAnswers(newAnswers);
      localStorage.setItem('answers', JSON.stringify(newAnswers));
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
    localStorage.setItem('answers', '');
    localStorage.setItem('age', '');
    localStorage.setItem('result', '');
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
