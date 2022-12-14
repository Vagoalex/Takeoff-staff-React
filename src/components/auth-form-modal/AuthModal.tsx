import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { setAuthActiveModal } from 'store/reducers/auth/authSlice';
import { selectActiveModal } from 'store/selectors/selectors';
import modalClasses from './modalClasses';
import './AuthModal.scss';

const AuthModal = () => {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(selectActiveModal);
  const { modal, modal_active, content, content_active } = modalClasses;

  const closeModal = () => {
    dispatch(setAuthActiveModal(false));
  };

  return (
    <div className={activeModal ? modal_active : modal} onClick={closeModal}>
      <div
        className={activeModal ? content_active : content}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className='AuthModal-content__title Modal-title'>
          Incorrect username or password
        </h3>
        <div className='AuthModal-content__buttons'>
          <button
            type='button'
            className='AuthModal-link AuthModal-link--close'
            onClick={closeModal}
          >
            Try again
          </button>
          <span className='AuthModal-slash Modal-title'>or:</span>
          <Link to='/register' className='AuthModal-link' onClick={closeModal}>
            Create new account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(AuthModal);
