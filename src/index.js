import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./components/store";
import {Provider} from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


