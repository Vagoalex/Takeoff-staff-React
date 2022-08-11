import { FC } from 'react';
import SignUp from '../../components/sign-up/SignUp';
import { Link } from 'react-router-dom';

const RegisterPage: FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account? <Link to='/login'>Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
