import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routes.js';
import { StateProvider } from "./Store.js";
import "./Styles/style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as serviceWorker from './serviceWorker';

AOS.init();

ReactDOM.render(
    <React.StrictMode>
        <StateProvider>
            <AppRouter />
        </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
