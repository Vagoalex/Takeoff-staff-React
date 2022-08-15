import { FC, useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import authFormValidate from 'helpers/authFormValidate';
import { IUser } from 'types/IUser';
import './AuthForm.scss';

interface FormProps {
  title: string;
  handleClick: (username: string, password: string) => void;
}

const AuthForm: FC<FormProps> = ({ title, handleClick }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik: FormikProps<IUser> = useFormik<IUser>({
    initialValues: {
      username: '',
      password: '',
    },

    validate: (values: IUser) => authFormValidate(values),
    onSubmit: (values: IUser, { resetForm }) => {
      resetForm();
      handleClick(values.username, values.password);
    },
  });

  return (
    <div className='AuthForm-container'>
      <form className='AuthForm' onSubmit={formik.handleSubmit}>
        <div className='AuthForm__elements'>
          <div className='AuthForm-field'>
            <label className='AuthForm-field__label' htmlFor='username' />
            <input
              className={`AuthForm-field__input ${
                formik.touched.username && formik.errors.username
                  ? 'form-input-required'
                  : ''
              }`}
              id='username'
              name='username'
              type='text'
              placeholder='username'
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className='form-error-msg'>{formik.errors.username}</div>
            ) : null}
          </div>

          <div className='AuthForm-field'>
            <label className='AuthForm-field__label' htmlFor='password' />
            <input
              className={`AuthForm-field__input ${
                formik.touched.password && formik.errors.password
                  ? 'form-input-required'
                  : ''
              }`}
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className='AuthForm-password-eye'>
              <button
                type='button'
                className='AuthForm-password-eye__btn'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <i className='fa fa-eye'></i>
                ) : (
                  <i className='fa fa-eye-slash'></i>
                )}
              </button>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className='form-error-msg'>{formik.errors.password}</div>
            ) : null}
          </div>
        </div>

        <button
          className={`AuthForm__btn ${
            formik.errors.username || formik.errors.password
              ? 'AuthForm-button-disabled'
              : ''
          }`}
          type='submit'
        >
          {title}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
