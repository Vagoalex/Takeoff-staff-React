import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { RootState } from 'store';
import showToast from 'components/helpers/showToast';
import LoginForm from 'components/login-form/LoginForm';
import { toast, TypeOptions } from 'react-toastify';

const Login = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const users = useAppSelector((state: RootState) => state.auth.users);

  const handleLogin = (username: string, password: string) => {
    const person = users.filter(
      (u) => u?.user?.username === username && u?.user?.password === password
    );
    person[0];

    // setIsAuth;
    // setAuthUser;
    // history('/contacts');
  };

  return (
    <>
      <LoginForm title='Войти' handleClick={handleLogin} />
    </>
  );
};

export default Login;

//  person[0]
//    ? addNotification('success', `Добро пожаловать, ${username} `)
//    : addNotification(
//        'error',
//        `Ошибка, пользователя ${username} не существует!`
//      );
