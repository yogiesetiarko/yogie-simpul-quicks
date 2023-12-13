import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// import * as Sentry from "@sentry/react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


// Sentry.init({
//   // eslint-disable-next-line no-undef
//   dsn: process.env.REACT_APP_SENTRY_DSN,
//   integrations: [new Sentry.BrowserTracing()],
//   tracesSampleRate: 0.2,
// });
import { WooriRoutes } from './components/route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <ToastContainer />
    <RouterProvider router={WooriRoutes} />
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
