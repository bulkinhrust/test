import React, { useState } from 'react';
import {
  TelegramShareButton, VKShareButton, WhatsappShareButton,
  TelegramIcon, VKIcon, WhatsappIcon,
} from 'react-share';

import invitations from '../assets/invitations';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import classes from './Invitation.module.scss';
import {Answer} from '../../../types';

type Props = {
  answers: { [key in Answer]: number };
  age?: Answer;
  reset: () => void;
};

const Invitation: React.FC<Props> = (props) => {
  const { answers, age, reset } = props;
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  let image;

  if (!localStorage.getItem('result')) {
    const maxValue = Math.max(...Object.values(answers));
    const leader = (Object.keys(answers) as Answer[]).find((answerKey) => (answers[answerKey] === maxValue));
    image = invitations[`pic${age}${leader}` as keyof typeof invitations];
    localStorage.setItem('result', `pic${age}${leader}`);
  } else {
    image = invitations[localStorage.getItem('result') as keyof typeof invitations];
  }

  return (
    <div className={classes.container}>
      <Modal
        visible={isResetModalOpen}
        title="Вы уверены?"
        submitTitle="Да"
        cancelTitle="Ой!"
        onSubmit={reset}
        onClose={() => setIsResetModalOpen(false)}
      >
        <p>Текущие результаты будут удалены</p>
      </Modal>
      <Modal
        visible={isShareModalOpen}
        title="Приглашение.png"
        cancelTitle="Отмена"
        onClose={() => setIsShareModalOpen(false)}
      >
        <div className={classes.share}>
          <TelegramShareButton title="Они женятся!!" url={`https://bulkinhrust.github.io${image}`}>
            <TelegramIcon size={40} borderRadius={20} />
          </TelegramShareButton>
          <WhatsappShareButton title="Они женятся!!" url={`https://bulkinhrust.github.io${image}`}>
            <WhatsappIcon size={40} borderRadius={20} />
          </WhatsappShareButton>
          <VKShareButton title="Они женятся!!" url={`https://bulkinhrust.github.io${image}`}>
            <VKIcon size={40} borderRadius={20} />
          </VKShareButton>
        </div>
      </Modal>
      <img src={image} alt="открытка" className={classes.invitation} />
      <div className={classes.bar}>
        <a href={image} target="_blank" rel="noopener noreferrer" download="Приглашение.png" className={classes.link}>
          <Button variant="fill" fullWidth>Скачать</Button>
        </a>
        <Button onClick={() => setIsShareModalOpen(true)} fullWidth>Отправить</Button>
      </div>
      <Button onClick={() => setIsResetModalOpen(true)} type="danger" fullWidth>Хочу пройти тест ещё раз!</Button>
    </div>
  );
};

export default Invitation;
