import { FC, useMemo } from 'react';
import { useAppSelector } from 'hooks/redux-hooks';
import './ContactsList.scss';

interface ListProps {
  inputText: string;
}

const ContactsList: FC<ListProps> = ({ inputText }) => {
  // const { contacts } = useAppSelector(selectContacts);
  // const filteredContacts = useMemo(
  //   () =>
  //     contacts.filter((ct) =>
  //       `${ct.firstName} ${ct.secondName}`
  //         .toLocaleLowerCase()
  //         .includes(inputText.toLocaleLowerCase())
  //     ),
  //   [contacts, sort]
  // );

  return <div>ContactsList</div>;
};

export default ContactsList;
