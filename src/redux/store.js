import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import reducer from "./reducers";
//export const store = createStore(reducer, applyMiddleware(...middleware));
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
