import { FC } from 'react';
import { useAppDispatch } from 'hooks/redux-hooks';
import { setAuthUser, setIsAuth } from 'store/reducers/auth/authSlice';
import useAuth from 'hooks/use-auth';
import Contacts from 'components/contacts/Contacts';

const MainPage: FC = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(setIsAuth(false));
    dispatch(setAuthUser(null));
  };

  return (
    <div>
      <h1>Welcome</h1>

      <button onClick={logOut}>Log out from {user?.username}</button>

      <Contacts />
    </div>
  );
};

export default MainPage;
