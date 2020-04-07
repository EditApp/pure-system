import React, { useState } from "react";
import { newId } from "../../Helpers/Id";
import Input from "../../Components/Form/Input";
import Select from "../../Components/Form/Select";
type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  id: number;
  label: string;
  type: any;
}
interface IOption {
  id: number;
  type: string;
  value: string;
}

export default function FormCrea(): JSX.Element {
  const [label, setLabel] = useState<string>("");
  const [elements, setElements] = useState<ITodo[]>([]);
  const [selectedOption, setSelectedOption] = useState([
    "text",
    "checkbox",
    "radio",
  ]);
  const [formType, setFormType] = useState<string>("");

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(label);
    setLabel("");
  };
  const addTodo = (phrase: string): void => {
    const newTodo: ITodo[] = [
      { id: newId(), label: phrase, type: formType },
      ...elements,
    ];
    setElements(newTodo);
  };
  const removeTodo = (index: number): void => {
    const newElement: ITodo[] = [...elements];
    newElement.splice(index, 1);

    setElements(newElement);
  };

  const Options = selectedOption.map((Options) => Options);
  const handleSelectedOptionChange = (e: any) => {
    setFormType(selectedOption[e.target.value]);
    console.log("selectedOption", selectedOption);
    console.log("selectedOption target value", selectedOption[e.target.value]);
  };

  return (
    <>
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => handleSelectedOptionChange(e)}>
          {Options.map((option, index) => (
            <option key={index} value={index}>
              {option}
            </option>
          ))}
        </select>
        {}

        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          required
        />
        <button type="submit">Add form element</button>
      </form>
      <form>
        {elements.map((formel: ITodo, index: number) => {
          return (
            <span>
              {" "}
              <Input type={formel.type} key={index} label={formel.label} />{" "}
              <button type="button" onClick={() => removeTodo(index)}>
                &times;
              </button>
            </span>
          );
        })}
      </form>
    </>
  );
}
