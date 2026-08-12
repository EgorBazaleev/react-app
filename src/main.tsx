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
import axios from 'axios';
import { OMDbFilmDetailsResponse } from './types/OMDbFilmDetailsResponse';
import { BASE_URL } from './helpers/API';

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
        element: <FilmDetailsPage />,
        errorElement: <>Something goes wrong</>,
        loader: async ({ params }) => {
          const { data } = await axios.get<OMDbFilmDetailsResponse>(`${BASE_URL}&i=${params.id}`)
          if (data?.Response !== 'True') {
            throw new Error(`Item '${params.id}' not found`);
          }
          return {

            id: data.imdbID,
            poster: data.Poster,
            name: data.Title,
            score: parseFloat(data.imdbRating),
            description: data.Plot,
            type: data.Type,
            productionDate: new Date(data.Released),
            length: parseInt(data.Runtime),
            genres: data.Genre.split(', '),
            comments: []
          }
        }
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
