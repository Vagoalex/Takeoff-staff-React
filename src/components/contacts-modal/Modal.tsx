import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { setContactActiveModal } from 'store/reducers/modals/modalSlice';
import { selectActiveAddContactModal } from 'store/selectors/selectors';
import './Modal.scss';

interface ModalProps {
  children: JSX.Element;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(selectActiveAddContactModal);

  return (
    <div
      className={activeModal ? 'modal modal--active' : 'modal'}
      onClick={() => dispatch(setContactActiveModal(false))}
    >
      <div
        className={
          activeModal
            ? 'modal__content modal__content--active'
            : 'modal__content'
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
