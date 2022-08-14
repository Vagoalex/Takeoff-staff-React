import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { RootState } from 'store';
import { addNewUser } from 'store/reducers/users/usersSlice';
import AuthForm from 'components/auth-form/AuthForm';

import createNewUser from 'helpers/createNewUser';
import showToast from 'helpers/showToast';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const users = useAppSelector((state: RootState) => state.users.users);

  const handleRegister = (username: string, password: string) => {
    const person = users.filter((u) => u?.user?.username === username);
    if (person.length !== 0) {
      showToast(
        'error',
        'Упс! пользователь с таким именем уже существует! Попробуйте другой!'
      );
    } else {
      showToast('success', `User "${username}" has been created`);

      const newUser = createNewUser(username, password);
      console.log(newUser);
      dispatch(addNewUser(newUser));
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
