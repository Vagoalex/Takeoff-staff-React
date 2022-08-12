import { FC } from 'react';
import { useAppDispatch } from 'hooks/redux-hooks';
import { setAuthUser, setIsAuth } from 'store/reducers/auth/authSlice';
import useAuth from 'hooks/use-auth';
import Contacts from 'components/contacts/Contacts';
import { motion } from 'framer-motion';

import './MainPage.scss';

const MainPage: FC = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(setIsAuth(false));
    dispatch(setAuthUser(null));
  };

  return (
    <motion.section
      className='MainPage wrapper'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className='MainPage__container content'>
        <div>
          <h2 className='content__title'>
            Welcome,{' '}
            <span className='content__title--username'>{user?.username}</span>
          </h2>
          <button className='content__button' onClick={logOut}>
            Log out
          </button>
        </div>
        <Contacts />
        <h1>Здесь скоро будет контент!</h1>
      </div>
    </motion.section>
  );
};

export default MainPage;
