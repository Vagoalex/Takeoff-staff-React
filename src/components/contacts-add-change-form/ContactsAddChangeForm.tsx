import { FC } from 'react';
import { useFormik, FormikProps } from 'formik';
import { IContacts, IFormContact } from 'types/IContacts';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import Modal from 'components/modal/Modal';
import { setContactActiveModal } from 'store/reducers/modals/modalSlice';
import contactsFormValidate from 'helpers/contactsFormValidate';
import './ContactsAddChangeForm.scss';
import {
  selectActiveAddContactModal,
  selectModalContact,
  selectTypeContactsModal,
} from 'store/selectors/selectors';

const ContactsAddChangeForm = () => {
  const dispatch = useAppDispatch();

  const activeModal = useAppSelector(selectActiveAddContactModal);
  const typeModal = useAppSelector(selectTypeContactsModal);
  const modalContact = useAppSelector(selectModalContact);

  const formik: FormikProps<IFormContact> = useFormik<IFormContact>({
    initialValues: {
      firstName: modalContact.firstName,
      secondName: modalContact.secondName,
      email: modalContact.email,
      number: modalContact.number,
    },
    validate: (values: IFormContact) => contactsFormValidate(values),
    onSubmit: (values: IFormContact, { resetForm }) => {
      resetForm();
      console.log(values);
    },
  });

  console.log(activeModal, typeModal, modalContact);
  return (
    <div className='ContactsForm-container'>
      <h2>{typeModal === 'add' ? 'Add contact' : 'Change'}</h2>
      <form className='ContactsForm' onSubmit={formik.handleSubmit}>
        <div className='ContactsForm__elements'>
          <div className='ContactsForm-field'>
            <label className='ContactsForm-field__label' htmlFor='firstName'>
              First Name:
            </label>
            <input
              className={`ContactsForm-field__input ${
                formik.touched.firstName && formik.errors.firstName
                  ? 'form-input-required'
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
              <div className='form-error-msg'>{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div className='ContactsForm-field'>
            <label className='ContactsForm-field__label' htmlFor='secondName'>
              Second Name:
            </label>
            <input
              className={`ContactsForm-field__input ${
                formik.touched.secondName && formik.errors.secondName
                  ? 'form-input-required'
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
              <div className='form-error-msg'>{formik.errors.secondName}</div>
            ) : null}
          </div>

          <div className='ContactsForm-field'>
            <label className='ContactsForm-field__label' htmlFor='email'>
              Email:
            </label>
            <input
              className={`ContactsForm-field__input ${
                formik.touched.email && formik.errors.email
                  ? 'form-input-required'
                  : ''
              }`}
              id='email'
              name='email'
              type='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='form-error-msg'>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className='ContactsForm-field'>
            <label className='ContactsForm-field__label' htmlFor='secondName'>
              Tel:
            </label>
            <input
              className={`ContactsForm-field__input ${
                formik.touched.number && formik.errors.number
                  ? 'form-input-required'
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
              <div className='form-error-msg'>{formik.errors.number}</div>
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
          {typeModal === 'add' ? 'Add' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default ContactsAddChangeForm;
