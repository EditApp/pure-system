import React, { useState } from "react";
import { newId } from "../../Helpers/Id";
import Input from "../../Components/Form/Input";
import Select from "../../Components/Form/Select";
type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  id: number;
  label: string;
  type: any;
  options?: any;
}
interface IOption {
  id: number;
  value: string;
}

export default function FormCrea(): JSX.Element {
  const [error, setError] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("");
  const [optionText, setOptionText] = useState<string>("");
  const [selectOption, setSelectOption] = useState<any>([
    { id: 0, value: "option" },
  ]);
  const [elements, setElements] = useState<ITodo[]>([]);
  const [selectedOption, setSelectedOption] = useState([
    "text",
    "checkbox",
    "radio",
    "select",
    "textarea",
  ]);
  const [formType, setFormType] = useState<string>("");

  const handleAddInput = (e: any): void => {
    e.preventDefault();
    addInput(label);
    setLabel("");
  };
  const addInput = (phrase: string): void => {
    const newTodo: ITodo[] = [
      { id: newId(), label: phrase, type: formType },
      ...elements,
    ];
    if (phrase !== "") {
      setElements(newTodo);
    } else {
      setError(true);
    }
  };
  const removeTodo = (index: number): void => {
    const newElement: ITodo[] = [...elements];
    newElement.splice(index, 1);

    setElements(newElement);
  };
  const addOptionNew = (phrase: string): void => {
    const newOption: any = [...selectOption, { id: newId(), value: phrase }];

    if (phrase !== "") {
      setSelectOption(newOption);
    } else {
      setError(true);
    }
  };
  const setOption = (e: any): void => {
    e.preventDefault();
    addOptionNew(optionText);
    setOptionText("");
  };
  const Options = selectedOption.map((Options) => Options);
  const handleSelectedOptionChange = (e: any) => {
    setFormType(selectedOption[e.target.value]);
    console.log("selectedOption", selectedOption);
    console.log("selectedOption target value", selectedOption[e.target.value]);
  };

  const renderElement = (param: any, arrayElems: any, index: any) => {
    switch (param) {
      case "select":
        return (
          <span>
            <label>{arrayElems.label}</label>
            <select>
              {selectOption.map((opt: any, index: any) => (
                <option key={index} value={index}>
                  {opt.value}
                </option>
              ))}
            </select>
          </span>
        );
      case "textarea":
        return (
          <>
            <label>{arrayElems.label}</label>
            <textarea name="story">It was a dark and stormy night...</textarea>
          </>
        );
      default:
        return (
          <span>
            {" "}
            <Input
              placeholder="fill your input"
              type={arrayElems.type}
              key={index}
              label={arrayElems.label}
            />{" "}
            <button type="button" onClick={() => removeTodo(index)}>
              &times;
            </button>
          </span>
        );
    }
  };
  return (
    <>
      <form>
        <select onChange={(e) => handleSelectedOptionChange(e)}>
          {Options.map((option, index) => (
            <option key={index} value={index}>
              {option}
            </option>
          ))}
        </select>

        {formType === "select" ? (
          <span>
            {" "}
            <input
              placeholder="select name"
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              required
            />
            {selectOption.map((opt: any, index: any) => {
              return (
                <span key={index}>
                  <input
                    placeholder={`option ${index}`}
                    type="text"
                    value={opt.value}
                    onChange={(e) => setOptionText(e.target.value)}
                    required
                  />
                  <button type="submit" onClick={setOption}>
                    +
                  </button>
                </span>
              );
            })}
            <button type="submit" onClick={handleAddInput}>
              Add select element
            </button>
          </span>
        ) : (
          <>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              required
            />
            <button type="submit" onClick={handleAddInput}>
              Add form element
            </button>
            {error && <p>Error please fill the form!</p>}
          </>
        )}
      </form>
      <form>
        {console.log(elements)}
        {elements.map((formel: ITodo, index: number) => {
          return renderElement(formel.type, formel, index);
        })}
      </form>
    </>
  );
}
