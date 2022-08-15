import { FC, useMemo, useState } from 'react';
import { useAppDispatch } from 'hooks/redux-hooks';
import { deleteContact } from 'store/reducers/users/usersSlice';
import { IContacts } from 'types/IContacts';
import convertNumber from 'helpers/convertNumber';
import useAuth from 'hooks/use-auth';
import Modal from 'components/modal/Modal';
import ContactsChangeForm from 'components/contacts-add-change-form/ContactsChangeForm';
import './ContactsListItem.scss';

type IContact = {
  contact: IContacts;
};

const ContactsListItem: FC<IContact> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const { user } = useAuth();
  const { id, firstName, secondName, email, number } = contact;
  const textNumber = useMemo(() => convertNumber(number), [number]);

  const onRemoveContact = (id: number) => {
    if (user) {
      const newContacts = user.contacts.filter((ct) => ct.id !== id);
      dispatch(deleteContact(newContacts));
    }
  };

  return (
    <div className='Contact'>
      <div className='Contact__container'>
        <p className='Contact__name'>
          {firstName} {secondName}
        </p>
        <a href={`mailto:${email}`} className='Contact__link'>
          {email}
        </a>
        <a href={`tel:+1${number}`} className='Contact__link'>
          {`+1 ${textNumber}`}
        </a>
      </div>
      <div>
        <button
          className='Contact-btn Contact-btn--change'
          type='button'
          onClick={() => setActiveModal(true)}
        >
          Change
        </button>
        <button
          className='Contact-btn Contact-btn--delete'
          onClick={() => onRemoveContact(id)}
        >
          Remove
        </button>
        <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
          <ContactsChangeForm contact={contact} />
        </Modal>
      </div>
    </div>
  );
};

export default ContactsListItem;
