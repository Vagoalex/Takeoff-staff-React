import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { RootState } from 'store';
import showToast from 'helpers/showToast';
import Form from 'components/form/Form';
import { toast, TypeOptions } from 'react-toastify';
import { setIsAuth, setAuthUser } from 'store/reducers/auth/authSlice';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const users = useAppSelector((state: RootState) => state.auth.users);

  const handleLogin = (username: string, password: string) => {
    const person = users.filter(
      (u) => u?.user?.username === username && u?.user?.password === password
    );
    if (person[0]) {
      dispatch(setAuthUser({ username, password }));
      dispatch(setIsAuth(true));
      history('/contacts');
    } else {
      console.log('данного юзера не существует!');
      console.log('модалка, не желаете ли вы зарегаться?');
    }
  };

  return (
    <>
      <Form title='Войти' handleClick={handleLogin} />
    </>
  );
};

export default SignIn;

//  person[0]
//    ? addNotification('success', `Добро пожаловать, ${username} `)
//    : addNotification(
//        'error',
//        `Ошибка, пользователя ${username} не существует!`
//      );