import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  activeModal: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setActiveModal(state, action: PayloadAction<boolean>) {
      state.activeModal = action.payload;
    },
  },
});

export const { setIsAuth, setActiveModal } = authSlice.actions;
export default authSlice.reducer;
