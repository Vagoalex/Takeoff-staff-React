import { FC, useState } from 'react';
import ContactsFilter from '../contacts-filter/ContactsFilter';
import ContactsList from '../contacts-list/ContactsList';
import Modal from '../modal/Modal';
import ContactsAddForm from '../contacts-add-change-form/ContactsAddForm';
import './Contacts.scss';

const Contacts: FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <>
      <div className='Contacts'>
        <div className='Contacts__container'>
          <h2 className='Contacts__title'>Contacts:</h2>
          <div className='Contacts__actions'>
            <ContactsFilter setInputText={setInputText} />
            <button
              className='Contacts-add-btn'
              type='button'
              onClick={() => setActiveModal(true)}
            >
              Add contact
            </button>
            <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
              <ContactsAddForm />
            </Modal>
          </div>
          <ContactsList inputText={inputText} />
        </div>
      </div>
    </>
  );
};

export default Contacts;
