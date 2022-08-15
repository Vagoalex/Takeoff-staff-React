import { FC } from 'react';
import './Modal.scss';

interface ModalProps {
  activeModal: boolean;
  setActiveModal: (activeModal: boolean) => void;
  children: JSX.Element;
}

const Modal: FC<ModalProps> = ({ activeModal, setActiveModal, children }) => {
  return (
    <div
      className={activeModal ? 'modal modal--active' : 'modal'}
      onClick={() => setActiveModal(false)}
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
