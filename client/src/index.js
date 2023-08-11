import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// * Routing
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store/index";
import { Provider } from "react-redux";
const deployDirection = process.env.REACT_APP_DEPLOY_URL

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={`/${deployDirection}`}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
