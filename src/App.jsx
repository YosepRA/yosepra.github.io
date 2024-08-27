import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './pages/Home/index.jsx';
import ProjectIndex from './pages/ProjectIndex/index.jsx';
import BlogIndex from './pages/BlogIndex/index.jsx';
import BlogDetails from './pages/BlogDetails/index.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/html.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
