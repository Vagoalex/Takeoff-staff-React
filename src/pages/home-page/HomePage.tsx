import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/use-auth';
import MainPage from 'pages/main-page/MainPage';

const HomePage: FC = () => {
  const { isAuth } = useAuth();

  return isAuth ? <MainPage /> : <Navigate to='/login' />;
};

export default HomePage;
