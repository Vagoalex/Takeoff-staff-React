import { FormikErrors } from 'formik';
import { IFormContact } from 'types/IContacts';

// костыли, много костылей..
function contactsFormValidate(values: IFormContact) {
  let errors: FormikErrors<IFormContact> = {};

  const withoutSpecialChars = /^[^-() /]*$/;
  const containsNumbers = /(?=.*[0-9])/;
  const containsLetters = /^.*[a-zA-Z]+.*$/;
  const withoutSpaces = /^[\S]$/;
  const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const onlyNums = /^[0-9]*$/;

  if (!values.firstName) {
    errors.firstName = 'Name is required';
  } else if (values.firstName.length < 3) {
    errors.firstName = 'This name is too short';
  } else if (withoutSpaces.test(values.firstName)) {
    errors.firstName = 'Without spaces!';
  } else if (values.firstName.length > 20) {
    errors.firstName = 'This name is too long';
  } else if (!containsLetters.test(values.firstName)) {
    errors.firstName = 'English letters in name is required';
  } else if (!withoutSpecialChars.test(values.firstName)) {
    errors.firstName = 'Without special symbols!';
  } else if (containsNumbers.test(values.firstName)) {
    errors.firstName = 'Without numbers!';
  }

  if (!values.secondName) {
    errors.secondName = 'Surname is required';
  } else if (values.secondName.length < 3) {
    errors.secondName = 'This surname is too short';
  } else if (withoutSpaces.test(values.secondName)) {
    errors.secondName = 'Without spaces!';
  } else if (values.secondName.length > 20) {
    errors.secondName = 'This surname is too long';
  } else if (!containsLetters.test(values.secondName)) {
    errors.secondName = 'English letters in surname is required';
  } else if (!withoutSpecialChars.test(values.secondName)) {
    errors.secondName = 'Without special symbols!';
  } else if (containsNumbers.test(values.secondName)) {
    errors.secondName = 'Without numbers!';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (values.email.length < 9) {
    errors.email = 'This email is too short';
  } else if (withoutSpaces.test(values.email)) {
    errors.email = 'Without spaces!';
  } else if (values.email.length > 40) {
    errors.email = 'This email is too long';
  } else if (!containsLetters.test(values.email)) {
    errors.email = 'English letters in email is required';
  } else if (!withoutSpecialChars.test(values.email)) {
    errors.email = 'Without special symbols!';
  } else if (!validEmail.test(values.email)) {
    errors.email = 'Not valid email!';
  }

  if (!values.number) {
    errors.number = 'Tel is required';
  } else if (values.number.toString().length !== 10) {
    errors.number = '10 numbers in tel is required';
  } else if (withoutSpaces.test(values.number.toString())) {
    errors.number = 'Without spaces!';
  } else if (!onlyNums.test(values.number.toString())) {
    errors.number = 'Without letters!';
  } else if (!withoutSpecialChars.test(values.number.toString())) {
    errors.number = 'Without special symbols!';
  }

  return errors;
}

export default contactsFormValidate;
