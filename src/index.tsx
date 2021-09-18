import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { App } from "./app";
import _createStore from "./store/store";

const store = _createStore();

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
