import { FC, ReactElement, ReactNode } from 'react';
import './Modal.scss';

interface ModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: JSX.Element;
}

const Modal: FC<ModalProps> = ({ showModal, setShowModal, children }) => {
  return (
    <div
      className={showModal ? 'modal modal--active' : 'modal'}
      onClick={() => setShowModal(false)}
    >
      <div
        className={
          showModal ? 'modal__content modal__content--active' : 'modal__content'
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
