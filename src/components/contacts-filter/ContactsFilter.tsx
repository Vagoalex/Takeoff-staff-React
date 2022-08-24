import { ChangeEvent, FC, memo, useState } from 'react';
import styles from './ContactsFilter.module.scss';

interface FilterProps {
  setInputText: (value: string) => void;
}

const ContactsFilter: FC<FilterProps> = ({ setInputText }) => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    setInputText(value);
  };

  return (
    <input
      className={styles.filter}
      placeholder='Search your contacts'
      value={value}
      onChange={onChange}
    />
  );
};

export default memo(ContactsFilter);
