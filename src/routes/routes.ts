import { lazy } from 'react';
import IAnimatedRoutes from 'types/routesTypes';

const HomePage = lazy(() => import('../pages/home-page/HomePage'));
const LoginPage = lazy(() => import('../pages/login-page/LoginPage'));
const RegisterPage = lazy(() => import('../pages/register-page/RegisterPage'));
const MainPage = lazy(() => import('../pages/main-page/MainPage'));

const routes: IAnimatedRoutes[] = [
  { path: '/', name: 'HomePage', Component: HomePage },
  { path: '/login', name: 'LoginPage', Component: LoginPage },
  { path: '/register', name: 'RegisterPage', Component: RegisterPage },
  { path: '/register', name: 'MainPage', Component: MainPage },
  { path: '*', name: 'Page404', Component: HomePage },
];

export default routes;
