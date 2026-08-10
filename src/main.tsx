import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { UserContextProvider } from './components/context/UserContextProvider.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginForm from './pages/LoginForm/LoginForm';
import MainMenu from './components/MainMenu/MainMenu';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import FilmDetailsPage from './pages/FilmDetailsPage/FilmDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainMenu />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/login',
        element: <LoginForm />
      },
      {
        path: '/favorites',
        element: <FavoritePage />
      },
      {
        path: '/movie/:id',
        element: <FilmDetailsPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
