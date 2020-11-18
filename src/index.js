import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";

import App from "./components/App";
import reducer from "./reducers";

const savetoLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    // console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      throw new Error();
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => savetoLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
