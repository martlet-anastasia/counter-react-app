import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import Router from "./Routes/Routes";
import NavbarView from "./common/NavbarView"

import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <HashRouter>
      <NavbarView />
    <Router />
  </HashRouter>
);
