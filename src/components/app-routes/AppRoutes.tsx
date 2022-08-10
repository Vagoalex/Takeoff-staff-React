import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from 'hooks/redux-hooks';
import { RootState } from 'store';
import './AppRoutes.scss';

const AppRoutes = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  //   const userSelector = createSelector(
  //     (state: RootState) => state.auth.isAuth,
  //     (state: RootState) => state.auth.authUser,
  //     (state: RootState) => state.auth.users,
  //     (isAuth, authUser, users) =>
  //       isAuth && users.filter((u) => u?.user?.username === authUser?.username)
  //   );
  //   const user = useAppSelector(userSelector);

  // return isAuth ?
  return <div>Hello</div>;
};

export default AppRoutes;
