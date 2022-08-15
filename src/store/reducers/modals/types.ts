export interface ModalState {
  authActiveModal: boolean;
  contactActiveModal: boolean;
  typeContactsModal: string;
  modalContact: IStateContact;
}

export interface IStateContact {
  id?: number | null;
  firstName: string;
  secondName: string;
  email: string;
  number: number | string;
}
