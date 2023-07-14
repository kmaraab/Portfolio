import { createBrowserRouter } from 'react-router-dom';

import Accueil from './pages/Accueil';

import App from './App';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/*',
        caseSensitive: true,
        // element: <ErrorPage />,
      },
      {
        path: '/Portfolio',
        caseSensitive: true,
        element: <Accueil />,
      },
    ],
  },
]);
