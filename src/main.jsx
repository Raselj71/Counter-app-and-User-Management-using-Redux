import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./Home.jsx";
import { Provider } from "react-redux";
import store from "./Service/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Home />
  </Provider>
);
