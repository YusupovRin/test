import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';

import './index.scss';

import AppComponent from './Components/App.Component';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);
