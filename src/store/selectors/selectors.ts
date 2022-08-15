import { RootState } from 'store';

export const selectIsAuth = (state: RootState) => state.auth.isAuth;

export const selectActiveModal = (state: RootState) =>
  state.modals.authActiveModal;
export const selectActiveAddContactModal = (state: RootState) =>
  state.modals.contactActiveModal;
export const selectTypeContactsModal = (state: RootState) =>
  state.modals.typeContactsModal;

export const selectUsers = (state: RootState) => state.users.users;

export const selectAuthUser = (state: RootState) => state.users.authUser;

export const selectAuthUserId = (state: RootState) => state.users.authUserId;
