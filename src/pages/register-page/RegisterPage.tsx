import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SignUp from '../../components/sign-up/SignUp';

import '../LoginRegister.scss';

const RegisterPage: FC = () => {
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
      <h2 className='auth__title'>Sign Up.</h2>
      <SignUp />
      <p className='auth__info'>
        already have an account?{' '}
        <Link to='/login' className='auth__link'>
          Sign In
        </Link>
      </p>
    </motion.section>
  );
};

export default RegisterPage;
