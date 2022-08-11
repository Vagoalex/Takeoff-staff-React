import './AppRoutes.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import routes from './routes';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component}></Route>
        ))}
      </Routes>
    </>
  );
};

export default AppRoutes;
