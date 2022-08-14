import useAuth from 'hooks/use-auth';
import { FC } from 'react';
import './Contacts.scss';

const Contacts: FC = () => {
  const { user } = useAuth();

  console.log(user);

  return <div className='Contacts'></div>;
};

export default Contacts;
