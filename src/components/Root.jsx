import React, { useEffect } from 'react';
import { ScrollRestoration, Outlet } from 'react-router-dom';

import WindowScroll from '@Components/WindowScroll.jsx';
import mainStyles from '@Styles/main.module.scss';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Root() {
  return (
    <>
      <ScrollRestoration />
      <WindowScroll />

      <div className="layout">
        <Navbar />

        <main className={mainStyles.mainContainer}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Root;
