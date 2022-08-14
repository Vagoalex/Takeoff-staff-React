import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ModalState from './types';

const initialState: ModalState = {
  authActiveModal: false,
  contactActiveModal: false,
  typeContactsModal: '',
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setAuthActiveModal(state, action: PayloadAction<boolean>) {
      state.authActiveModal = action.payload;
    },
    setContactActiveModal(state, action: PayloadAction<boolean>) {
      state.contactActiveModal = action.payload;
    },
    setTypeContactsModal(state, action: PayloadAction<string>) {
      state.typeContactsModal = action.payload;
    },
  },
});

export const {
  setAuthActiveModal,
  setContactActiveModal,
  setTypeContactsModal,
} = modalSlice.actions;
export default modalSlice.reducer;
