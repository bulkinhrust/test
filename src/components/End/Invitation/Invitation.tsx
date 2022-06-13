import React, {useState} from 'react';
import {
  TelegramShareButton, VKShareButton, WhatsappShareButton,
  TelegramIcon, VKIcon, WhatsappIcon,
} from 'react-share';

import invitations from '../assets/invitations';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import classes from './Invitation.module.scss';

type Props = {
  reset: () => void;
};

const Invitation: React.FC<Props> = (props) => {
  const { reset } = props;
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

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
          <TelegramShareButton title="Они женятся!!" url={`http://localhost:3000${invitations.pic21}`}>
            <TelegramIcon size={40} borderRadius={20} />
          </TelegramShareButton>
          <WhatsappShareButton title="Они женятся!!" url={`http://localhost:3000${invitations.pic21}`}>
            <WhatsappIcon size={40} borderRadius={20} />
          </WhatsappShareButton>
          <VKShareButton title="Они женятся!!" url={`http://localhost:3000${invitations.pic21}`}>
            <VKIcon size={40} borderRadius={20} />
          </VKShareButton>
        </div>
      </Modal>
      <img src={invitations.pic21} alt="открытка" className={classes.invitation} />
      <div className={classes.bar}>
        <a href={invitations.pic21} target="_blank" rel="noopener noreferrer" download="Приглашение.png" className={classes.link}>
          <Button variant="fill" fullWidth>Скачать</Button>
        </a>
        <Button onClick={() => setIsShareModalOpen(true)} fullWidth>Отправить</Button>
      </div>
      <Button onClick={() => setIsResetModalOpen(true)} type="danger" fullWidth>Хочу пройти тест ещё раз!</Button>
    </div>
  );
};

export default Invitation;
