import "./global.css";
import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store/";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>{/* permet de donner accès au store persisté */}
      <App />
    </PersistGate>
  </Provider >
);
