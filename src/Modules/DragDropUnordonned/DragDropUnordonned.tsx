import React, { useState } from "react";
import "./DragDropUnordonned.css";
import Board from "./Board";
import Card from "./Card";
type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  id: number;
  text: string;
  complete: boolean;
}

export default function DragDropUnordonned(props: any): JSX.Element {
  return (
    <div className="flexbox">
      <Board id="board-1" className="board">
        <Card id="card-1" className="card" draggable="true">
          {" "}
          <p>Card 1</p>
        </Card>
        <Card id="card-2" className="card" draggable="true">
          {" "}
          <p>Card 2</p>
        </Card>
        <Card id="card-3" className="card" draggable="true">
          {" "}
          <p>Card 3</p>
        </Card>
      </Board>
      <Board id="board-2" className="board">
        <Card id="card-4" className="card" draggable="true">
          {" "}
          <p>Card 4</p>
        </Card>
      </Board>
    </div>
  );
}
