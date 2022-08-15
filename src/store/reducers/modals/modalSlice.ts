import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState, IStateContact } from './types';

const initialState: ModalState = {
  authActiveModal: false,
  contactActiveModal: false,
  typeContactsModal: 'add',
  modalContact: {
    id: null,
    firstName: '',
    secondName: '',
    email: '',
    number: '',
  },
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
    setModalContact(state, action: PayloadAction<IStateContact>) {
      state.modalContact = action.payload;
    },
  },
});

export const {
  setAuthActiveModal,
  setContactActiveModal,
  setTypeContactsModal,
  setModalContact,
} = modalSlice.actions;
export default modalSlice.reducer;
