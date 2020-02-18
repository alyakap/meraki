import React from "react";
import { useInputField } from "./customHooks";

export default () => {
  const firstNameField = useInputField("David");
  const lastNameField = useInputField("Verhulst");
  const sportsField = useInputField("");
  return (
    <form>
      <input {...firstNameField} type="text" placeholder="first name" />
      <input {...lastNameField} type="text" placeholder="last name" />
      <select {...sportsField}>
        <option value="">-- make your choice --</option>
        <option value="football">Football</option>
        <option value="swimming">Swimming</option>
        <option value="coding">Coding</option>
      </select>
    </form>
  );
};
