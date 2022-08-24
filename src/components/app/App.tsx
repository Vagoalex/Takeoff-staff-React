import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AuthModal from 'components/auth-form-modal/AuthModal';
import AnimatedRoutes from 'routes/AnimatedRoutes';

import './App.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <Router>
        <AnimatedRoutes />
        <AuthModal />
      </Router>
      <div className='App__purple-sphere'></div>
      <div className='App__purple-sphere-right'></div>
      <div className='App__black-sphere-top'></div>
      <div className='App__black-sphere-bottom'></div>
      <ToastContainer />
    </div>
  );
};

export default App;
