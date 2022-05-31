import Answer from './Answer';

type Question = {
  question: string;
  answers: {
    [key in 'a' | 'b' | 'c']: { title: string, type: Answer }
  };
};

export default Question;
