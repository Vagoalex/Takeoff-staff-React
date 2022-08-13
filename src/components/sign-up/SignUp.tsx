import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { RootState } from 'store';
import { addNewUser } from 'store/reducers/auth/authSlice';
import AuthForm from 'components/auth-form/AuthForm';

import createNewUser from 'helpers/createNewUser';
import showToast from 'helpers/showToast';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const users = useAppSelector((state: RootState) => state.auth.users);

  const handleRegister = (username: string, password: string) => {
    const person = users.filter((u) => u?.user?.username === username);
    if (person.length !== 0) {
      console.log(
        'Упс! пользователь с таким именем уже существует! Попробуйте другой!'
      );
      showToast(
        'error',
        'Упс! пользователь с таким именем уже существует! Попробуйте другой!'
      );
    } else {
      showToast('success', 'Пользователь создан!');

      console.log('REGISTRED');
      const newUser = createNewUser(username, password);
      console.log(newUser);
      // dispatch(addNewUser(username, password));
      history('/login');
    }
  };

  return (
    <>
      <AuthForm title='Sign Up' handleClick={handleRegister} />
    </>
  );
};

export default SignUp;
