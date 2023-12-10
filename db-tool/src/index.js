import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "../src/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

// styles css
import "./styles/swiper-bundle.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="170152221967-ppvh4spn65jta1q5bv4r2c7lbdtui3ln.apps.googleusercontent.com">
      <Provider store={store}>
        {" "}
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
