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
import Download from '../../ui/Download';
import Share from '../../ui/Share';

type Props = {
  answers: { [key in number]: Answer; };
  age?: Answer;
  reset: () => void;
};

const MESSAGE = "Серёга и Маринка женятся!"

const Invitation: React.FC<Props> = (props) => {
  const { answers, age, reset } = props;
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  let image;

  if (!localStorage.getItem('result')) {
    const results = Object.values(answers).reduce(
      (acc, value) => {
        acc[value] = acc[value] + 1;
        return acc;
      },
      { 1: 0, 2: 0, 3: 0 },
    );
    const maxValue = Math.max(...Object.values(results));
    const leader = (Object.keys(results) as Answer[]).find((answerKey) => (results[answerKey] === maxValue));
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
          <TelegramShareButton title={MESSAGE} url={`https://bulkinhrust.github.io${image}`}>
            <TelegramIcon size={40} borderRadius={20} />
          </TelegramShareButton>
          <WhatsappShareButton title={MESSAGE} url={`https://bulkinhrust.github.io${image}`}>
            <WhatsappIcon size={40} borderRadius={20} />
          </WhatsappShareButton>
          <VKShareButton title={MESSAGE} url={`https://bulkinhrust.github.io${image}`}>
            <VKIcon size={40} borderRadius={20} />
          </VKShareButton>
        </div>
      </Modal>
      <img src={image} alt="открытка" className={classes.invitation} />
      <div className={classes.bar}>
        <a href={image} target="_blank" rel="noopener noreferrer" download="Приглашение.png" className={classes.link}>
          <Button variant="fill" fullWidth className={classes.downloadButton}>
            <span>Скачать</span>
            <Download className={classes.downloadIcon} />
          </Button>
        </a>
        <Button onClick={() => setIsShareModalOpen(true)} fullWidth className={classes.shareButton}>
          <span>Отправить</span>
          <Share className={classes.shareIcon} />
        </Button>
      </div>
      <Button onClick={() => setIsResetModalOpen(true)} type="danger" fullWidth>Хочу пройти тест ещё раз!</Button>
    </div>
  );
};

export default Invitation;
