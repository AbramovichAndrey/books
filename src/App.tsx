import "./App.css";
import { Provider } from "react-redux";

import { store } from "./store";
import Router from "./router/Router";
import "reset-css";
import SideEffects from "./components/SideEffects/SideEffects";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <SideEffects />
    </Provider>
  );
};

export default App;
