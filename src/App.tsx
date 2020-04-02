import React from "react";

import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  return (
    <>
      <header className="header">
        <h1>My App</h1>
        <p>Pick your favourite episodes!</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favourit-module">Favourites Module</Link>
        </nav>
      </header>
      {props.children}
    </>
  );
}
