import { FC, useMemo } from 'react';
import useAuth from 'hooks/use-auth';
import ContactsListItem from 'components/contacts-list-item/ContactsListItem';

import './ContactsList.scss';

interface ListProps {
  inputText: string;
  onModal: (e: React.SyntheticEvent<EventTarget>) => void;
}

const ContactsList: FC<ListProps> = ({ inputText, onModal }) => {
  const { user } = useAuth();

  const filteredContacts = useMemo(
    () =>
      user?.contacts.filter((ct) =>
        `${ct.firstName} ${ct.secondName}`
          .toLocaleLowerCase()
          .includes(inputText.toLocaleLowerCase())
      ),
    [user?.contacts, inputText]
  );

  if (filteredContacts?.length === 0 || !filteredContacts) {
    <div className='ContactsList'>
      <h2 className='ContactsList__empty'>Your contacts list is empty :(</h2>
    </div>;
  }

  return (
    <>
      <div className='ContactsList'>
        {filteredContacts?.map((ct) => (
          <ContactsListItem key={ct.id} contact={ct} onModal={onModal} />
        ))}
      </div>
    </>
  );
};

export default ContactsList;
