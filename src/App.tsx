import React from "react";
import { Link } from "@reach/router";
import "./App.css";
export default function App(props: any): JSX.Element {
  return (
    <>
      <header className="header">
        <h1>My App</h1>
      </header>
      <div className="layout">
        <div>
          <aside>
            <nav>
              <Link to="/">Home</Link>
              <h5>Components :</h5>
              <Link to="/todolist">Todo List</Link>
              <Link to="/dragdrop">Drag Drop</Link>

              <h5>Modules :</h5>

              <Link to="/favourit-module">Favourites Module</Link>
            </nav>
          </aside>
        </div>
        <div className="children"> {props.children}</div>
      </div>
    </>
  );
}
