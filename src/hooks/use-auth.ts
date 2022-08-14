import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from './redux-hooks';

function useAuth() {
  const dispatch = useAppDispatch();

  const userSelector = createSelector(
    (state: RootState) => state.auth.isAuth,
    (state: RootState) => state.auth.authUser,
    (state: RootState) => state.users.users,
    (isAuth, authUser, users) => {
      if (isAuth) {
        const person = users.filter((u) => u?.user?.username === authUser)[0];
        dispatch(setContacts(person.contacts));
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
