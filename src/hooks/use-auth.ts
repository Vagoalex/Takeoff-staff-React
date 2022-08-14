import { createSelector } from '@reduxjs/toolkit';
import {
  selectAuthUser,
  selectIsAuth,
  selectUsers,
  selectAuthUserId,
} from 'store/selectors/selectors';
import { useAppSelector } from './redux-hooks';

function useAuth() {
  const userSelector = createSelector(
    selectIsAuth,
    selectAuthUser,
    selectAuthUserId,
    selectUsers,
    (isAuth, authUser, userId, users) => {
      if (isAuth) {
        const person = users.filter(
          (u) => u?.user?.username === authUser && u?.id === userId
        )[0];
        return {
          id: person.id,
          username: person.user.username,
          contacts: person.contacts,
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
