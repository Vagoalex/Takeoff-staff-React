import { FC } from 'react';
import { useFormik, FormikProps } from 'formik';
import { IContacts, IFormContact } from 'types/IContacts';
import { useAppDispatch } from 'hooks/redux-hooks';
import contactsFormValidate from 'helpers/contactsFormValidate';
import createOrUpdateContact from 'helpers/createNewContact';
import { changeContact } from 'store/reducers/users/usersSlice';
import showToast from 'helpers/showToast';
import './ContactsAddChangeForm.scss';

type IContact = {
  contact: IContacts;
  setActiveModal: (activeModal: boolean) => void;
};

const ContactsChangeForm: FC<IContact> = ({ contact, setActiveModal }) => {
  const dispatch = useAppDispatch();

  const formik: FormikProps<IFormContact> = useFormik<IFormContact>({
    initialValues: {
      firstName: contact.firstName,
      secondName: contact.secondName,
      email: contact.email,
      number: contact.number,
    },
    validate: (values: IFormContact) => contactsFormValidate(values),
    onSubmit: (values: IFormContact, { resetForm }) => {
      const ctObj = {
        id: contact.id,
        firstName: values.firstName,
        secondName: values.secondName,
        email: values.email,
        number: values.number,
      };
      const updatedContact = createOrUpdateContact(ctObj);
      dispatch(changeContact(updatedContact));
      resetForm();
      showToast('success', `Contact ${values.firstName} has been updated`);
      setActiveModal(false);
    },
  });

  return (
    <div className='ContactsForm-container'>
      <h2 className='ContactsForm-container__title'>Change</h2>
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
              type='email'
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
          Save
        </button>
      </form>
    </div>
  );
};

export default ContactsChangeForm;
