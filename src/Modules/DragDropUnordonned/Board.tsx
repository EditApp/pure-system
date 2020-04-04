import React, { useState } from "react";
type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  id: number;
  text: string;
  complete: boolean;
}

export default function Board(props: any): JSX.Element {
  const drop = (e: any): void => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card: any = document.getElementById(card_id);
    e.target.appendChild(card);
    card.style.display = "block";
  };

  const dragOver = (e: any): void => {
    e.preventDefault();
  };

  return (
    <>
      <div
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
      >
        {props.children}
      </div>
    </>
  );
}
