import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  authUser: null,
  activeModal: false,
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
    setActiveModal(state, action: PayloadAction<boolean>) {
      state.activeModal = action.payload;
    },
  },
});

export const { setIsAuth, setAuthUser, setActiveModal } = authSlice.actions;
export default authSlice.reducer;
