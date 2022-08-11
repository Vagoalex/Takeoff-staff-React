import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { IUser } from 'types/IUser';
import useAuth from 'hooks/use-auth';
import { setAuthUser, setIsAuth } from 'store/reducers/auth/authSlice';
import { useAppDispatch } from 'hooks/redux-hooks';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, user } = useAuth();

  const logOut = () => {
    dispatch(setIsAuth(false));
    dispatch(setAuthUser({ username: '', password: '' }));
  };

  return isAuth ? (
    <div>
      <h1>Welcome</h1>

      <button onClick={logOut}>Log out from {user?.username}</button>
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

export default HomePage;
