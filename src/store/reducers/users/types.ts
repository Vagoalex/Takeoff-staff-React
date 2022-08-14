import { IContacts } from 'types/IContacts';
import { IUsers } from 'types/IUsers';

export interface IUsersState {
  users: IUsers[];
  authUser: string | null;
  authUserId: number | null;
}

export interface IUserContacts {
  id: number;
  contact: IContacts;
}
export interface IUserContactID {
  id: number;
  contactId: number;
}
