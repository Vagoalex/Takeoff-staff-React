import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AnimatedRoutes from 'routes/AnimatedRoutes';

import './App.scss';

const App: FC = () => {
  useEffect(() => {
    fetch('https://62f801c573b79d0153620891.mockapi.io/api/users')
      .then((response) => response.json())
      .then((data) => console.log(data[0].contacts));
  }, []);

  return (
    <div className='App'>
      <Router>
        <AnimatedRoutes />
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
