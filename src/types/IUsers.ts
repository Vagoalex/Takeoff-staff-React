import { IContacts } from './IContacts';

export interface IUsers {
  id: number;
  user: { username: string; password: string };
  contacts: IContacts[];
}
