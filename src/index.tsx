import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storeToolkit from "./redux/reduxStorу";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={storeToolkit}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
