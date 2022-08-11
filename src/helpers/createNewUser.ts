import data from 'contacts.json';

const { contacts } = data;

function createNewUser(username: string, password: string) {
  const id = Date.now();
  const user = { username, password };

  return {
    id,
    user,
    contacts,
  };
}

export default createNewUser;
