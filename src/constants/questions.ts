import { Question } from '../types';

const questions: Question[] = [
  {
    question: ['Сколько вам лет?', '(мы никому не скажем)'],
    value: 'age',
    answers: {
      a: {title: 'меньше 25', type: '1'},
      b: {title: 'от 25 до 35', type: '2'},
      c: {title: 'от 35 до 45', type: '3'},
    }
  },
  {
    question: ['how?'],
    value: 'type',
    answers: {
      a: {title: 'yes', type: '1'},
      b: {title: 'no', type: '2'},
      c: {title: 'maybe', type: '3'},
    }
  },
  {
    question: ['where?'],
    value: 'type',
    answers: {
      a: {title: 'yes', type: '1'},
      b: {title: 'no', type: '2'},
      c: {title: 'maybe', type: '3'},
    }
  },
  {
    question: ['why?'],
    value: 'type',
    answers: {
      a: {title: 'yes', type: '1'},
      b: {title: 'no', type: '2'},
      c: {title: 'maybe', type: '3'},
    }
  }
];

export default questions;
