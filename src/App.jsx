import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './components/Root.jsx';
import Home from './pages/Home/index.jsx';
import ProjectIndex from './pages/ProjectIndex/index.jsx';
import BlogIndex from './pages/BlogIndex/index.jsx';
import BlogDetails from './pages/BlogDetails/index.jsx';
import iconLibrary from './lib/fontawesome/index.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/html.scss';

// FontAwesome icons library.
iconLibrary.start();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'project',
        element: <ProjectIndex />,
      },
      {
        path: 'blog',
        element: <BlogIndex />,
      },
      {
        path: 'blog/:id',
        element: <BlogDetails />,
      },
    ],
  },
]);

const App = function AppComponent() {
  return <RouterProvider router={router} />;
};

export default App;
