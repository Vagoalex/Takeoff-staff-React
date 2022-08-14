import { FC, useState } from 'react';
import ContactsFilter from '../contacts-filter/ContactsFilter';
import Modal from '../contacts-modal/Modal';
import ContactsAddForm from '../contacts-add-form/ContactsAddForm';
import './Contacts.scss';
import ContactsList from '../contacts-list/ContactsList';

const Contacts: FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className='Contacts'>
      <div className='Contacts__container'>
        <h2 className='Contacts__title'>Contacts</h2>
        <div className='Contacts__actions'>
          <ContactsFilter setInputText={setInputText} />
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <ContactsAddForm />
          </Modal>
          <button
            className='Contacts-btn'
            type='button'
            onClick={() => setShowModal(true)}
          >
            Add contact
          </button>
        </div>
        <ContactsList inputText={inputText} />
      </div>
    </div>
  );
};

export default Contacts;
