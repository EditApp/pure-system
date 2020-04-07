import React from "react";
import { ISelect } from "../../Interfaces/interfaces";

export default function Select({
  id,
  value,
  label,
  options,
  selectChange,
}: ISelect): JSX.Element {
  return (
    <label htmlFor={id}>
      {label}
      <select id={id} onChange={selectChange}>
        {options.map((option: any, index: any) => {
          return (
            <option key={index} value={value}>
              {option.type}
            </option>
          );
        })}
      </select>
    </label>
  );
}
