import { FC, useState } from 'react';

interface FormProps {
  title: string;
  handleClick: (username: string, password: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Имя пользователя'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Пароль'
      />
      <button onClick={() => handleClick(username, password)}>{title}</button>
    </div>
  );
};

export default Form;
