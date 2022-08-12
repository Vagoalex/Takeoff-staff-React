import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';
import { ToastContainer } from 'react-toastify';

import './App.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <Router>
        <AppRoutes />
      </Router>
      <div className='App__purple-sphere'></div>
      <div className='App__purple-sphere-right'></div>
      <div className='App__black-sphere-top'></div>
      <div className='App__black-sphere-bottom'></div>
      {/* <ToastContainer
        position='bottom-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
};

export default App;
