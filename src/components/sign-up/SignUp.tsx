import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { RootState } from 'store';
import showToast from 'helpers/showToast';
import { toast, TypeOptions } from 'react-toastify';
import { addNewUser } from 'store/reducers/auth/authSlice';
import Form from 'components/form/Form';

import createNewUser from 'helpers/createNewUser';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const users = useAppSelector((state: RootState) => state.auth.users);

  const handleRegister = (username: string, password: string) => {
    const person = users.filter((u) => u?.user?.username === username);
    if (person[0]) {
      console.log(
        'Упс! пользователь с таким именем уже существует! Попробуйте другой!'
      );
    } else {
      console.log('REGISTRED');
      const newUser = createNewUser(username, password);
      console.log(newUser);
      // dispatch(addNewUser(username, password));
      // history('/login');
    }
  };

  return <Form title='register' handleClick={handleRegister} />;
};

export default SignUp;
