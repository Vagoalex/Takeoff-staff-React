import { FC, useState } from 'react';
import { useAppDispatch } from 'hooks/redux-hooks';
import ContactsFilter from '../contacts-filter/ContactsFilter';
import ContactsList from '../contacts-list/ContactsList';
import ContactsAddChangeForm from '../contacts-add-change-form/ContactsAddChangeForm';
import {
  setContactActiveModal,
  setTypeContactsModal,
} from 'store/reducers/modals/modalSlice';
import Modal from '../modal/Modal';
import './Contacts.scss';

const Contacts: FC = () => {
  const [inputText, setInputText] = useState<string>('');

  const dispatch = useAppDispatch();

  const onModal = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }

    e.target.dataset.type &&
      dispatch(setTypeContactsModal(e.target.dataset.type));

    dispatch(setContactActiveModal(true));
  };

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
              datatype='add'
              data-type='add'
              onClick={onModal}
            >
              Add contact
            </button>
          </div>
          <ContactsList onModal={onModal} inputText={inputText} />
        </div>
      </div>
    </>
  );
};

export default Contacts;
