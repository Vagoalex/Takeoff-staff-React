import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home-page/HomePage'));
const LoginPage = lazy(() => import('../pages/login-page/LoginPage'));
const RegisterPage = lazy(() => import('../pages/register-page/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/contacts-page/ContactsPage'));

const routes = [
  { path: '/', name: 'HomePage', Component: HomePage },
  { path: '/login', name: 'LoginPage', Component: LoginPage },
  { path: '/register', name: 'RegisterPage', Component: RegisterPage },
  { path: '/register', name: 'ContactsPage', Component: ContactsPage },
];

export default routes;
