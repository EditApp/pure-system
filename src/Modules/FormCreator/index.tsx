import React from "react";
import FormCrea from "./FormCrea";

export default function AppForm(props: any): JSX.Element {
  return (
    <>
      <header className="header">
        <h1>Form Creator</h1>
      </header>
      <FormCrea />
    </>
  );
}
