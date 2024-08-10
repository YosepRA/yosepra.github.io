import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/index.jsx';
import ProjectIndex from './pages/ProjectIndex/index.jsx';
import BlogIndex from './pages/BlogIndex/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/project',
    element: <ProjectIndex />,
  },
  {
    path: '/blog',
    element: <BlogIndex />,
  },
]);

const App = function AppComponent() {
  return <RouterProvider router={router} />;
};

export default App;
