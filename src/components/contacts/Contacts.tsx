import { FC, useState } from 'react';

import ContactsFilter from '../contacts-filter/ContactsFilter';
import ContactsList from '../contacts-list/ContactsList';
import ContactsAddChangeForm from '../contacts-add-change-form/ContactsAddChangeForm';
import './Contacts.scss';

const Contacts: FC = () => {
  const [inputText, setInputText] = useState<string>('');

  // Костыль
  const initialContactValue = {
    id: 2131412,
    firstName: '',
    secondName: '',
    email: '',
    number: 1,
  };

  return (
    <div className='Contacts'>
      <div className='Contacts__container'>
        <h2 className='Contacts__title'>Contacts:</h2>
        <div className='Contacts__actions'>
          <ContactsFilter setInputText={setInputText} />
          <ContactsAddChangeForm
            typeModal='add'
            contact={initialContactValue}
          />
        </div>
        <ContactsList inputText={inputText} />
      </div>
    </div>
  );
};

export default Contacts;
