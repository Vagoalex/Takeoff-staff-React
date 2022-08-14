import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'hooks/redux-hooks';
import { setIsAuth } from 'store/reducers/auth/authSlice';
import useAuth from 'hooks/use-auth';
import Contacts from 'components/contacts/Contacts';
import { motion } from 'framer-motion';
import { setAuthUser } from 'store/reducers/users/usersSlice';

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
        <div className='content-nav'>
          <h2 className='content-nav__title'>
            Welcome,{' '}
            <span className='content-nav__title--username'>
              {user?.username}
            </span>
          </h2>
          <Link to='/login' className='content-nav__button' onClick={logOut}>
            Log out
          </Link>
        </div>
        <Contacts />
      </div>
    </motion.section>
  );
};

export default MainPage;
