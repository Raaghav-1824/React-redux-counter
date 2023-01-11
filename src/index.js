import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/App.js";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(<h1>Shivam Raghav</h1>,document.getElementById("root"));
