import { IFormContact } from 'types/IContacts';

function createOrUpdateContact(values: IFormContact) {
  const { id = Date.now(), firstName, secondName, email, number } = values;

  return {
    id,
    firstName,
    secondName,
    email,
    number: +number,
  };
}

export default createOrUpdateContact;
