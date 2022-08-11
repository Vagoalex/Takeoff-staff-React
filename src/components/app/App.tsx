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
