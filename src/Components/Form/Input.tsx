import React from "react";
import { IInput } from "../../Interfaces/interfaces";

export default function Input({
  id,
  value,
  label,
  type,
  onChangeInput,
}: IInput): JSX.Element {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChangeInput}
        required
      />
    </label>
  );
}
