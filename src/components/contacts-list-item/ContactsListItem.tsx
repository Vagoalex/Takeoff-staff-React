import { useAppDispatch } from 'hooks/redux-hooks';
import { FC, useMemo } from 'react';
import { setActiveAddContactModal } from 'store/reducers/users/usersSlice';
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
  const dispatch = useAppDispatch();

  const { firstName, secondName, email, number } = contact;
  const validateName = useMemo(
    () => parseFloat(number.replace(/\s/g, '')),
    [number]
  );

  return (
    <div className='Contact'>
      <div className='Contact__container'>
        <p className='Contact__name'>
          {firstName} {secondName}
        </p>
        <p className='Contact__desk'>{email}</p>
        <a href={`tel+${validateName}`} className='Contact__desk Contact-phone'>
          {number}
        </a>
      </div>
      <div>
        <button
          className='Contact-btn Contact-btn--change'
          onClick={() => dispatch(setActiveAddContactModal(true))}
        >
          Change
        </button>
        <button className='Contact-btn Contact-btn--delete'>Remove</button>
      </div>
    </div>
  );
};

export default ContactsListItem;
