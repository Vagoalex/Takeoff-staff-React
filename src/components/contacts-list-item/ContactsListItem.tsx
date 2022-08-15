import { useAppDispatch } from 'hooks/redux-hooks';
import { FC, useMemo } from 'react';
import { deleteContact } from 'store/reducers/users/usersSlice';
import { setModalContact } from 'store/reducers/modals/modalSlice';
import { IContacts } from 'types/IContacts';
import validateNumber from 'helpers/validateNumber';
import useAuth from 'hooks/use-auth';
import './ContactsListItem.scss';

type IContact = {
  contact: IContacts;
  onModal: (e: React.SyntheticEvent<EventTarget>) => void;
};

const ContactsListItem: FC<IContact> = ({ contact, onModal }) => {
  const dispatch = useAppDispatch();

  const { user } = useAuth();
  const { id, firstName, secondName, email, number } = contact;
  const textNumber = useMemo(() => validateNumber(number), [number]);

  const onRemoveContact = (id: number) => {
    if (user) {
      const newContacts = user.contacts.filter((ct) => ct.id !== id);
      console.log(newContacts);

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
          data-type='change'
          onClick={(e) => {
            dispatch(setModalContact(contact));
            onModal(e);
          }}
        >
          Change
        </button>
        <button
          className='Contact-btn Contact-btn--delete'
          onClick={() => onRemoveContact(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ContactsListItem;
