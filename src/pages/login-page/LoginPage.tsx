import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SignIn from '../../components/sign-in/SignIn';

import '../LoginRegister.scss';

const LoginPage: FC = () => {
  return (
    <motion.section
      className='auth'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.4,
      }}
    >
      <h2 className='auth__title'>Sign In</h2>
      <SignIn />
      <p className='auth__info'>
        don't have an account?{' '}
        <Link to='/register' className='auth__link'>
          Create a account
        </Link>
      </p>
    </motion.section>
  );
};

export default LoginPage;
