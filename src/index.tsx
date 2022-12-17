import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LocalGame from './Pages/LocalGame';
import Menu from './Pages/Menu';
import OnlineGame,  {
  loader as onlineGameLoader
} from './Pages/OnlineGame';
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/local-game",
    element: <LocalGame />
  },
  {
    path: "/online-game/:gameCode?",
    element: <OnlineGame />,
    loader: onlineGameLoader,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);