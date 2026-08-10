import { useContext } from 'react';
import styles from './App.module.css';
import { UserContext } from './components/context/UserContext';
import MainMenu from './components/MainMenu/MainMenu';
import LoginForm from './pages/LoginForm/LoginForm';
import MainPage from './pages/MainPage/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
  return (
    <>
      <div className={styles['app']}>
        <MainMenu />
      </div>
    </>
  );
}

export default App;
