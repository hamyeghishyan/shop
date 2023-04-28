import React from 'react';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
=======
import App from './App';
import store from './store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 3c44554e513e82840c0ac8ec3a51452c9ee31f8c
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<<<<<<< HEAD
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
=======
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>

>>>>>>> 3c44554e513e82840c0ac8ec3a51452c9ee31f8c
);

