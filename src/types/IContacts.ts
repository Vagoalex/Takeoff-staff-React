export interface IContacts {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  number: number;
}

export interface IFormContact {
  id?: number;
  firstName: string;
  secondName: string;
  email: string;
  number: number | string;
}
