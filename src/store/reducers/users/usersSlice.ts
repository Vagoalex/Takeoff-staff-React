import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUsers } from 'types/IUsers';
import { IUsersState } from './types';
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
  },
});

export const { addNewUser } = contactsSlice.actions;
export default contactsSlice.reducer;
