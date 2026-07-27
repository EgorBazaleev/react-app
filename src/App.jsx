import styles from './App.module.css';
import FilmList from './components/FilmList/FilmList';
import Header from './components/Header/Header';
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
  return (
    <div className={styles['app']}>
      <MenuLayout iconPath='./bookmark.svg'>
        <a href="">Поиск фильмов</a>
        <a href="">Мои фильмы</a>
        <a href="">Войти</a>
      </MenuLayout>
      <Header text="Поиск" />
      <Paragraph />
      <Search />
      <FilmList films={films} />
    </div>
  );
}

export default App;
