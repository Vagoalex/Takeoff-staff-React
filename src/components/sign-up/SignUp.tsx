// import { useNavigate } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { Form } from './Form';
// import { setUser } from '../store/slices/userSlice';
// import { useAppDispatch } from '../hooks/redux-hooks';

// const SignUp = () => {
//   const dispatch = useAppDispatch();
//   const history = useNavigate();

//   const handleRegister = (email: string, password: string) => {
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         console.log(user);
//         dispatch(
//           setUser({
//             email: user.email,
//             id: user.uid,
//             token: user.refreshToken,
//           })
//         );
//         history('/');
//       })
//       .catch(console.error);
//   };

//   return <Form title='register' handleClick={handleRegister} />;
// };

// export { SignUp };

import React from 'react';

const SignUp = () => {
  return <div>SignUp</div>;
};

export default SignUp;
