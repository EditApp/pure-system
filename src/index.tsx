import React from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/stable";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "./index.css";
import App from "./App";
import HomePage from "./Modules/FavUnfav/HomePage";
import FavPage from "./Modules/FavUnfav/FavPage";
import "./index.css";
import { Router, RouteComponentProps } from "@reach/router";
import ModuleFavUnfav from "./Modules/FavUnfav";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <Router>
    <App path="/">
      <RouterPage pageComponent={<div>Home</div>} path="/" />
      <RouterPage pageComponent={<ModuleFavUnfav />} path="/favourit-module" />
      <RouterPage pageComponent={<HomePage />} path="/home" />
      <RouterPage pageComponent={<FavPage />} path="/faves" />
    </App>
  </Router>,

  document.getElementById("root")
);
