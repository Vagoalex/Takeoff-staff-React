import { useFormik, FormikProps } from 'formik';
import { IFormContact } from 'types/IContacts';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import contactsFormValidate from 'helpers/contactsFormValidate';
import './ContactsAddChangeForm.scss';
import { FC } from 'react';

type AddFormProps = {
  activeModal: boolean;
};

const ContactsAddForm: FC<AddFormProps> = ({ activeModal }) => {
  const dispatch = useAppDispatch();

  const formik: FormikProps<IFormContact> = useFormik<IFormContact>({
    initialValues: {
      firstName: '',
      secondName: '',
      email: '',
      number: '',
    },
    validate: (values: IFormContact) => contactsFormValidate(values),
    onSubmit: (values: IFormContact, { resetForm }) => {
      if (!activeModal) resetForm();
      resetForm();
      console.log(values);
    },
  });

  return (
    <div className='ContactsForm-container'>
      <h2 className='ContactsForm-container__title'>Add contact</h2>
      <form className='ContactsForm' onSubmit={formik.handleSubmit}>
        <div className='ContactsForm__elements'>
          <div className='ContactsForm-field'>
            <label className='ContactsForm-field__label' htmlFor='firstName'>
              First Name:
            </label>
            <input
              className={`ContactsForm-field__input ${
                formik.touched.firstName && formik.errors.firstName
                  ? 'contacts-form-input-required'
                  : ''
              }`}
              id='firstName'
              name='firstName'
              type='text'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className='contacts-form-error-msg'>
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>

          <div className='ContactsForm-field'>
            <label className='ContactsForm-field__label' htmlFor='secondName'>
              Second Name:
            </label>
            <input
              className={`ContactsForm-field__input ${
                formik.touched.secondName && formik.errors.secondName
                  ? 'contacts-form-input-required'
                  : ''
              }`}
              id='secondName'
              name='secondName'
              type='text'
              value={formik.values.secondName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.secondName && formik.errors.secondName ? (
              <div className='contacts-form-error-msg'>
                {formik.errors.secondName}
              </div>
            ) : null}
          </div>

          <div className='ContactsForm-field'>
            <label className='ContactsForm-field__label' htmlFor='email'>
              Email:
            </label>
            <input
              className={`ContactsForm-field__input ${
                formik.touched.email && formik.errors.email
                  ? 'contacts-form-input-required'
                  : ''
              }`}
              id='email'
              name='email'
              type='text'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='contacts-form-error-msg'>
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className='ContactsForm-field'>
            <label className='ContactsForm-field__label' htmlFor='secondName'>
              Tel:
            </label>
            <input
              className={`ContactsForm-field__input ${
                formik.touched.number && formik.errors.number
                  ? 'contacts-form-input-required'
                  : ''
              }`}
              id='number'
              name='number'
              type='text'
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.number && formik.errors.number ? (
              <div className='contacts-form-error-msg'>
                {formik.errors.number}
              </div>
            ) : null}
          </div>
        </div>
        <button
          className={`ContactsForm__btn ${
            formik.errors.firstName ||
            formik.errors.secondName ||
            formik.errors.email ||
            formik.errors.number
              ? 'ContactsForm-button-disabled'
              : ''
          }`}
          type='submit'
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ContactsAddForm;
