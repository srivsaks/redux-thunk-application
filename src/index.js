import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { userReducer } from "./reducer";
import thunk from "redux-thunk";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const reducer = combineReducers({ userReducer: userReducer });
const middleWare = [thunk];

const store = createStore(reducer, applyMiddleware(...middleWare));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
