import { FC } from 'react';
import { useFormik, FormikProps } from 'formik';
import { IContacts, IContact } from 'types/IContacts';
import { useAppDispatch } from 'hooks/redux-hooks';
import Modal from 'components/contacts-modal/Modal';
import { setContactActiveModal } from 'store/reducers/modals/modalSlice';
import contactsFormValidate from 'helpers/contactsFormValidate';
import './ContactsAddChangeForm.scss';

interface ContactsFormProps {
  typeModal: string;
  contact?: IContacts;
}
const ContactsAddChangeForm: FC<ContactsFormProps> = ({
  contact,
  typeModal,
}) => {
  const dispatch = useAppDispatch();

  const formik: FormikProps<IContact> = useFormik<IContact>({
    initialValues: {
      firstName: contact!.firstName,
      secondName: contact!.secondName,
      email: contact!.email,
      number: contact!.number,
    },
    validate: (values: IContact) => contactsFormValidate(values),
    onSubmit: (values: IContact, { resetForm }) => {
      resetForm();
      console.log(values);
    },
  });
  return (
    <>
      <button
        className={
          typeModal === 'add'
            ? 'Contacts-add-btn'
            : 'Contact-btn Contact-btn--change'
        }
        type='button'
        onClick={() => dispatch(setContactActiveModal(true))}
      >
        {typeModal === 'add' ? 'Add contact' : 'Change'}
      </button>

      <Modal>
        <div className='ContactsForm-container'>
          <h2>{typeModal === 'add' ? 'Add contact' : 'Change'}</h2>
          <form className='ContactsForm' onSubmit={formik.handleSubmit}>
            <div className='ContactsForm__elements'>
              <div className='ContactsForm-field'>
                <label
                  className='ContactsForm-field__label'
                  htmlFor='firstName'
                />
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
                  <div className='form-error-msg'>
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              <div className='ContactsForm-field'>
                <label
                  className='ContactsForm-field__label'
                  htmlFor='secondName'
                />
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
                  <div className='form-error-msg'>
                    {formik.errors.secondName}
                  </div>
                ) : null}
              </div>

              <div className='ContactsForm-field'>
                <label className='ContactsForm-field__label' htmlFor='email' />
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
                <label
                  className='ContactsForm-field__label'
                  htmlFor='secondName'
                />
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
      </Modal>
    </>
  );
};

export default ContactsAddChangeForm;
