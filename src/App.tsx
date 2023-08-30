import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";

import { store } from "./components/store";
import Router from "./router/Router";
import "reset-css";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
