import React from "react";
import { StoreProvider } from "./Context/Store";
import FavPage from "./FavPage";
import HomePage from "./HomePage";
import "./index.css";

export default function AppFav(props: any): JSX.Element {
  return (
    <StoreProvider>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes!</p>
      </header>
      <FavPage />
      <hr></hr>
      <HomePage />
      {props.children}
    </StoreProvider>
  );
}
