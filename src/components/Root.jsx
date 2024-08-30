import React from 'react';
import { ScrollRestoration, Outlet } from 'react-router-dom';

import mainStyles from '@styles/main02.module.scss';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Root() {
  return (
    <>
      <ScrollRestoration />

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
