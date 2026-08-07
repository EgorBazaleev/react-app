import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import { UserContextProvider } from './components/context/UserContextProvider.js';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>
);
