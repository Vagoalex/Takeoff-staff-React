import { IUser } from './../types/IUser';
import { FormikErrors } from 'formik';

function formValidate(values: IUser) {
  let errors: FormikErrors<IUser> = {};

  const withoutSpecialChars = /^[^-() /]*$/;
  const containsNumbers = /(?=.*[0-9])/;
  const containsLetters = /^.*[a-zA-Z]+.*$/;
  const withoutSpaces = /^[\S]$/;

  if (!values.username) {
    errors.username = 'User name is required';
  } else if (values.username.length < 4) {
    errors.username = 'This user name is too short';
  } else if (withoutSpaces.test(values.username)) {
    errors.username = 'Without spaces!';
  } else if (values.username.length > 30) {
    errors.username = 'This login is too long';
  } else if (!containsLetters.test(values.username)) {
    errors.username = 'English letters in name is required';
  } else if (!withoutSpecialChars.test(values.username)) {
    errors.username = 'Without special symbols!';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4) {
    errors.password = 'This password is too short';
  } else if (withoutSpaces.test(values.password)) {
    errors.password = 'Without spaces!';
  } else if (values.password.length > 22) {
    errors.password = 'This password is too long';
  } else if (!containsLetters.test(values.password)) {
    errors.password = 'English letters in password is required';
  } else if (!containsNumbers.test(values.password)) {
    errors.password = 'Numbers in password is required';
  } else if (!withoutSpecialChars.test(values.password)) {
    errors.password = 'Without special symbols!';
  }

  return errors;
}

export default formValidate;
