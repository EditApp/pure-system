import React from "react";
import { Link } from "@reach/router";
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
        <nav>
          <Link to="/home">Home</Link>
        </nav>
      </header>
      <FavPage />
      <hr></hr>
      <HomePage />
      {props.children}
    </StoreProvider>
  );
}
