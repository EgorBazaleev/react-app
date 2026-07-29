import { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import FilmList from './components/FilmList/FilmList';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import MenuButton from './components/MenuButton/MenuButton';
import MenuLayout from './components/MenuLayout/MenuLayout';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';

const films = [
  {
    id: 1,
    name: 'Black Widow',
    score: 324,
    poster: './posters/black_widow.svg'
  },
  {
    id: 2,
    name: 'Shang Chi',
    score: 124,
    poster: './posters/shang_chi.svg'
  },
  {
    id: 3,
    name: 'Loki',
    score: 235,
    poster: './posters/loki.svg'
  }
];


function App() {
  const getUsers = () => {
    const data = window.localStorage.getItem('users');
    if (data) {
      return JSON.parse(data);
    }
  };
  const setUsers = (users) => window.localStorage.setItem('users', JSON.stringify(users));
  const getUserAndUsers = (userName) => {
    const users = getUsers();
    if (!users) {
      return [null, users];
    }
    return [users.find(user => user.name === userName), users];
  };
  const getLoginedUser = () => {
    const users = getUsers();
    if (!users || users.length === 0) {
      return '';
    }
    const loginedUser = users.find(user => user.isLogined);
    if (!loginedUser) {
      return '';
    }
    return loginedUser.name;
  };

  const [userInputName, setUserInputName] = useState();
  const userInputOnChange = (event) => setUserInputName(event.target.value);

  const [userName, setUserName] = useState(getLoginedUser);

  const login = () => {
    let [user, users] = getUserAndUsers(userInputName);
    if (!user) {
      user = { name: userInputName };
      users = [...users || [], user];
    }
    user.isLogined = true;
    setUsers(users);
    setUserName(userInputName);
  };

  const logout = () => {
    console.log(userName);
    const [user, users] = getUserAndUsers(userName);
    user.isLogined = false;
    setUsers(users);
    setUserName('');
  };


  return (
    <div className={styles['app']}>
      <MenuLayout iconPath='./bookmark.svg'>
        <MenuButton text='Поиск фильмов' />
        <MenuButton text='Мои фильмы' />
        {
          userName
            ? <><MenuButton text={userName} /> <MenuButton text='Выйти' onClick={logout} /></>
            : <MenuButton text='Войти' />
        }
      </MenuLayout>
      <Header text="Поиск" />
      <Paragraph />
      <Search />
      <FilmList films={films} />

      <Header text="Вход" />
      <div style={{ width: '100%' }}>
        <Input placeholder='Ваше имя' value={userInputName} onChange={userInputOnChange} />
      </div>
      <Button text="Войти в профиль" onClick={login} />
    </div>
  );
}

export default App;
