import { FC } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../components/sign-in/SignIn';

const LoginPage: FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <SignIn />
      <p>
        Or <Link to='/register'>register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
