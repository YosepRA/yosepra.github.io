import React from 'react';
import { ScrollRestoration, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@App/store/index.js';

import mainStyles from '@Styles/main02.module.scss';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Root() {
  return (
    <Provider store={store}>
      {/* <ScrollRestoration /> */}

      <div className="layout">
        <Navbar />

        <main className={mainStyles.mainContainer}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </Provider>
  );
}

export default Root;
