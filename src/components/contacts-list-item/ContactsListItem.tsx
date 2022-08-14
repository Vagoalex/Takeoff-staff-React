import { FC, useMemo, useState } from 'react';
import Modal from 'components/contacts-modal/Modal';
import './ContactsListItem.scss';

type IContact = {
  contact: {
    firstName: string;
    secondName: string;
    email: string;
    number: string;
  };
};

const ContactsListItem: FC<IContact> = ({ contact }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { firstName, secondName, email, number } = contact;
  const validateName = useMemo(() => parseFloat(number), [number]);

  return (
    <div className='Contact'>
      <div className='Contact__container'>
        <p className='Contact__desk'>
          {firstName} {secondName}
        </p>
        <p className='Contact__desk'>{email}</p>
        <a href={`tel+${validateName}`} className='Contact__desk'>
          {number}
        </a>
      </div>
      <div>
        <button onClick={() => setShowModal(true)}>Изменить</button>
        <button>Удалить</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <button>Изменить, компонент</button>
      </Modal>
    </div>
  );
};

export default ContactsListItem;
