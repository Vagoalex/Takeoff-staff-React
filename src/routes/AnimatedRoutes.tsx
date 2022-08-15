import { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Spinner from 'components/spinner/Spinner';
import routes from './routes';
import IAnimatedRoutes from 'types/routesTypes';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes location={location} key={location.pathname}>
          {routes.map(({ path, Component }: IAnimatedRoutes) => (
            <Route key={path} path={path} element={<Component />}></Route>
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default AnimatedRoutes;
