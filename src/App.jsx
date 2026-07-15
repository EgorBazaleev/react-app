import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import MenuLayout from './components/MenuLayout/MenuLayout';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';

function App() {

  const searchButtonHandler = () => console.log('search');

  return (
    <>
      <MenuLayout iconPath='./bookmark.svg'>
          <a href="">Поиск фильмов</a>
          <a href="">Мои фильмы</a>
          <a href="">Войти</a>
      </MenuLayout>
      <Button text='Искать' onClick={searchButtonHandler}/>
      <Header/>
      <Paragraph/>
      <Search/>
    </>
  );
}

export default App;
