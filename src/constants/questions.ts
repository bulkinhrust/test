import { Question } from '../types';

const questions: Question[] = [
  {
    question: ['Сколько вам лет?', '(мы никому не скажем)'],
    value: 'age',
    answers: {
      a: {title: 'Меньше 35', type: '1'},
      b: {title: 'От 35 до 45', type: '2'},
      c: {title: 'От 45', type: '3'},
    }
  },
  {
    question: ['Что важнее на первом', 'свидании?'],
    value: 'type',
    answers: {
      a: {title: 'Романтическая обстановка', type: '3'},
      b: {title: 'Вкусно поесть', type: '2'},
      c: {title: 'Не опозориться', type: '1'},
    }
  },
  {
    question: ['В доме выключили свет.', 'Чем вы займётесь?'],
    value: 'type',
    answers: {
      a: {title: 'Поем и пойду спать', type: '2'},
      b: {title: 'А в ближайшем баре есть свет?', type: '1'},
      c: {title: 'Отличный повод зажечь ароматические свечи', type: '3'},
    }
  },
  {
    question: ['Кем бы вы были', 'в фильме про зомби?'],
    value: 'type',
    answers: {
      a: {title: 'Членом банды анархистов', type: '1'},
      b: {title: 'Хозяином хорошо защищённой фермы', type: '2'},
      c: {title: 'Бесстрашным лидером группы выживших', type: '3'},
    }
  },
  {
    question: ['Вы лидер', 'музыкальной группы.', 'О чём ваш главный хит?'],
    value: 'type',
    answers: {
      a: {title: 'О любви, конечно же', type: '3'},
      b: {title: 'О красивой жизни', type: '2'},
      c: {title: 'О прогнившем обществе и тупых политиках', type: '1'},
    }
  },
  {
    question: ['Кем вы хотели стать', 'в детстве?'],
    value: 'type',
    answers: {
      a: {title: 'Космонавтом', type: '3'},
      b: {title: 'Рок-звездой', type: '1'},
      c: {title: 'Миллионером', type: '2'},
    }
  },
  {
    question: ['В какой стране вам', 'было бы комфортнее?'],
    value: 'type',
    answers: {
      a: {title: 'Италия', type: '2'},
      b: {title: 'Германия', type: '1'},
      c: {title: 'Франция', type: '3'},
    }
  },
  {
    question: ['Куда бы вы', 'хотели отправиться', '20 августа?'],
    value: 'type',
    answers: {
      a: {title: 'На богатое застолье', type: '2'},
      b: {title: 'На романтическую церемонию', type: '3'},
      c: {title: 'На весёлую гулянку', type: '1'},
    }
  }
];

export default questions;
