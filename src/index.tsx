import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { setDefaultOptions } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import 'normalize.css';
import './styles.module.scss';

setDefaultOptions({
  locale: ruLocale
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename="/cinema/build">
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
