import React from "react";
import { IInput } from "../../Interfaces/interfaces";

export default function Input({
  id,
  value,
  placeholder,
  label,
  type,
  onChangeInput,
}: IInput): JSX.Element {
  return (
    <label htmlFor={id}>
      {label}
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        value={value}
        onChange={onChangeInput}
        required
      />
    </label>
  );
}
