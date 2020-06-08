import React from 'react';
import ReactDOM from 'react-dom';
//import AppRouter from './Routes.js';
//import { StateProvider } from "./Store.js";
import Home from "./Pages/Home.js"
import About from "./Pages/About.js"
import "./Styles/style.css";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <React.StrictMode>
        <React.Fragment>
        <Home />
        <About />
        </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
