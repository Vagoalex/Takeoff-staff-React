import { FC, useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import formValidate from 'helpers/formValidate';
import { IUser } from 'types/IUser';
import './Form.scss';

interface FormProps {
  title: string;
  handleClick: (username: string, password: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const formik: FormikProps<IUser> = useFormik<IUser>({
    initialValues: {
      username: '',
      password: '',
    },

    validate: (values: IUser) => formValidate(values),
    onSubmit: (values: IUser, { resetForm }) => {
      resetForm();
      handleClick(values.username, values.password);
    },
  });

  return (
    <div className='Form-container'>
      <form className='Form' onSubmit={formik.handleSubmit}>
        <div className='Form-elements'>
          <div className='Form-elements__field'>
            <label
              className='Form-elements__label label-username'
              htmlFor='username'
            >
              username
            </label>
            <input
              className={`Form-elements__input ${
                formik.touched.username && formik.errors.username
                  ? 'form-input-required'
                  : ''
              }`}
              id='username'
              name='username'
              type='text'
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className='form-error-msg'>{formik.errors.username}</div>
            ) : null}
          </div>

          <div className='Form-elements__field'>
            <label
              className='Form-elements__label label-password'
              htmlFor='password'
            >
              password
            </label>
            <input
              className={`Form-elements__input ${
                formik.touched.password && formik.errors.password
                  ? 'form-input-required'
                  : ''
              }`}
              id='password'
              name='password'
              type='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='form-error-msg'>{formik.errors.password}</div>
            ) : null}
          </div>
        </div>

        <button
          className={`Form__btn ${
            formik.touched.username && formik.errors.password
              ? 'form-button-disabled'
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

export default Form;
