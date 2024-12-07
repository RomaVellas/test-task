import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.ts";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
