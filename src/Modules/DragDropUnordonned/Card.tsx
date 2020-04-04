import React, { useState } from "react";
type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  id: number;
  text: string;
  complete: boolean;
}

export default function Card(props: any): JSX.Element {
  const dragStart = (e: any): void => {
    const target: any = e.target;
    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver = (e: any) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
      >
        {props.children}
      </div>
    </>
  );
}
