import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import showToast from 'helpers/showToast';
import AuthForm from 'components/auth-form/AuthForm';
import { setIsAuth } from 'store/reducers/auth/authSlice';
import { setAuthActiveModal } from 'store/reducers/modals/modalSlice';
import { setAuthUser, setAuthUserId } from 'store/reducers/users/usersSlice';
import { selectUsers } from 'store/selectors/selectors';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const users = useAppSelector(selectUsers);

  const handleLogin = (username: string, password: string) => {
    const person = users.filter(
      (u) => u?.user?.username === username && u?.user?.password === password
    );

    if (person[0]) {
      dispatch(setAuthUser(username));
      dispatch(setAuthUserId(person[0].id));
      dispatch(setIsAuth(true));
      showToast('success', `Hello, ${username}!`);
      history('/contacts');
    } else {
      dispatch(setAuthActiveModal(true));
    }
  };

  return (
    <>
      <AuthForm title='Sign In' handleClick={handleLogin} />
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
