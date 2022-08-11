import { Suspense } from 'react';

import routes from './routes';
import IAppRoutes from 'types/routesTypes';
import { Routes, Route, useLocation } from 'react-router-dom';
import './AppRoutes.scss';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Routes location={location} key={location.pathname}>
          {routes.map(({ path, Component }: IAppRoutes) => (
            <Route key={path} path={path} element={<Component />}></Route>
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
