import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "../redux/store";
import { HashRouter } from "react-router-dom";

function Root() {
  return (
    <HashRouter base="/">
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
}

export default Root;
