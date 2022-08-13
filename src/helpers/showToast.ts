import { toast } from 'react-toastify';

const showToast = (type = 'success', msg: string) => {
  if (type === 'success') {
    toast.success(msg, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'error') {
    toast.error(msg, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
export default showToast;
