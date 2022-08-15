import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  authActiveModal: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setAuthActiveModal(state, action: PayloadAction<boolean>) {
      state.authActiveModal = action.payload;
    },
  },
});

export const { setIsAuth, setAuthActiveModal } = authSlice.actions;
export default authSlice.reducer;
