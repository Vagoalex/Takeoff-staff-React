import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUsers } from 'types/IUsers';
import { IUserContacts, IUserContactID, IUsersState } from './types';
import users from './usersState';

const initialState: IUsersState = {
  users,
};

const contactsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser(state, action: PayloadAction<IUsers>) {
      state.users.push(action.payload);
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
export const { addNewUser } = contactsSlice.actions;
export default contactsSlice.reducer;
