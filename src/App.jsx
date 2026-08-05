import { useContext, useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import FilmList from './components/FilmList/FilmList';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';
import { UserContext } from './components/context/UserContext';
import MainMenu from './components/MainMenu/MainMenu';

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

  const [userInputName, setUserInputName] = useState();
  const userInputOnChange = (event) => setUserInputName(event.target.value);

  const { setUserName } = useContext(UserContext);

  return (
    <div className={styles['app']}>
      <MainMenu />
      <Header text="Поиск" />
      <Paragraph />
      <Search />
      <FilmList films={films} />

      <Header text="Вход" />
      <div style={{ width: '100%' }}>
        <Input placeholder='Ваше имя' value={userInputName} onChange={userInputOnChange} />
      </div>
      <Button text="Войти в профиль" onClick={() => setUserName(userInputName)} />
    </div>
  );
}

export default App;
