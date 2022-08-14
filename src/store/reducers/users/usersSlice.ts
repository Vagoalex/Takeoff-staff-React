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
    // addContact(state, action: PayloadAction<IUserContacts>) {
    //   state.users[action.payload.id].contacts.push(action.payload.contact);
    // },
    // changeContact(state, action: PayloadAction<IUserContacts>) {
    //   state.users[action.payload.id].contacts = state.users[
    //     action.payload.id
    //   ].contacts.map((contact) =>
    //     contact.id === action.payload.id ? action.payload.contact : contact
    //   );
    // },
    // deleteContact(state, action: PayloadAction<IUserContactID>) {
    //   state.users[action.payload.id].contacts = state.users[
    //     action.payload.id
    //   ].contacts.filter((contact) => contact.id !== action.payload.contactId);
    // },
  },
});

// export const { addNewUser, addContact, changeContact, deleteContact } =
export const { addNewUser, setAuthUser, setAuthUserId } = contactsSlice.actions;
export default contactsSlice.reducer;
