import { FC, useState } from 'react';
import { useAppDispatch } from 'hooks/redux-hooks';
import { setActiveAddContactModal } from 'store/reducers/users/usersSlice';
import ContactsFilter from '../contacts-filter/ContactsFilter';
import Modal from '../contacts-modal/Modal';
import ContactsAddForm from '../contacts-add-form/ContactsAddForm';
import ContactsList from '../contacts-list/ContactsList';
import './Contacts.scss';

const Contacts: FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useAppDispatch();

  return (
    <div className='Contacts'>
      <div className='Contacts__container'>
        <h2 className='Contacts__title'>Contacts:</h2>
        <div className='Contacts__actions'>
          <ContactsFilter setInputText={setInputText} />
          <button
            className='Contacts-add-btn'
            type='button'
            onClick={() => dispatch(setActiveAddContactModal(true))}
          >
            Add contact
          </button>
          <Modal>
            <ContactsAddForm />
          </Modal>
        </div>
        <ContactsList inputText={inputText} />
      </div>
    </div>
  );
};

export default Contacts;
