import { FC } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../components/sign-in/SignIn';

const LoginPage: FC = () => {
  return (
    <div>
      <h2>Login</h2>
      <SignIn />
      <p>
        Or <Link to='/register'>register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
