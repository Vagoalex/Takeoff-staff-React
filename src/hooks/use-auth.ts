import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import {
  selectAuthUser,
  selectIsAuth,
  selectUsers,
} from 'store/selectors/selectors';
import { useAppSelector } from './redux-hooks';

function useAuth() {
  const userSelector = createSelector(
    selectIsAuth,
    selectAuthUser,
    selectUsers,
    (isAuth, authUser, users) => {
      if (isAuth) {
        const person = users.filter((u) => u?.user?.username === authUser)[0];
        return {
          id: person.id,
          username: person.user.username,
        };
      }
    }
  );
  const user = useAppSelector(userSelector);

  return {
    isAuth: !!user,
    user,
  };
}
export default useAuth;
