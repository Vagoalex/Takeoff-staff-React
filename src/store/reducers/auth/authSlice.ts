import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, IUsers } from './types';
import users from './usersState';

const initialState: AuthState = {
  isAuth: false,
  authUser: null,
  users,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setAuthUser(state, action: PayloadAction<string | null>) {
      state.authUser = action.payload;
    },
    addNewUser(state, action: PayloadAction<IUsers>) {
      state.users.push(action.payload);
    },
  },
});

export const { setIsAuth, setAuthUser, addNewUser } = authSlice.actions;
export default authSlice.reducer;
