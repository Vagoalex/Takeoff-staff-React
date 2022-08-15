import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUsers } from 'types/IUsers';
import { IUsersState } from './types';
import users from './usersState';
import { IContacts } from 'types/IContacts';

const initialState: IUsersState = {
  users,
  authUser: null,
  authUserId: null,
};

const contactsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAuthUser(state, action: PayloadAction<string | null>) {
      state.authUser = action.payload;
    },

    setAuthUserId(state, action: PayloadAction<number | null>) {
      state.authUserId = action.payload;
    },

    addNewUser(state, action: PayloadAction<IUsers>) {
      state.users.push(action.payload);
    },

    addContact(state, action: PayloadAction<IContacts>) {
      const updatedUser = state.users.filter(
        (user) => user.id === state.authUserId
      );
      updatedUser[0].contacts.push(action.payload);

      state.users.map((user) =>
        user.id === updatedUser[0].id ? updatedUser : user
      );
    },

    changeContact(state, action: PayloadAction<IContacts>) {
      const currUser = state.users.filter((u) => u.id === state.authUserId);
      const newContacts = currUser[0].contacts.map((ct) =>
        ct.id === action.payload.id ? action.payload : ct
      );
      state.users.map((u) =>
        u.id === state.authUserId ? (u.contacts = newContacts) : u
      );
    },

    deleteContact(state, action: PayloadAction<IContacts[]>) {
      state.users.map((u) =>
        u.id === state.authUserId ? (u.contacts = action.payload) : u
      );
    },
  },
});

export const {
  addNewUser,
  setAuthUser,
  setAuthUserId,
  addContact,
  changeContact,
  deleteContact,
} = contactsSlice.actions;
export default contactsSlice.reducer;
