import { iContacts } from 'types/IContacts';
import { IUser } from 'types/IUser';

export interface AuthState {
  isAuth: boolean;
  authUser: string | null;
  users: IUsers[];
}

export interface IUsers {
  id: number;
  user: { username: string; password: string };
  contacts: iContacts[];
}
