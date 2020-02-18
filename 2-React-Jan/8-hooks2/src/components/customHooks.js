import { useState } from "react";

export const useInputField = str => {
  const [value, setValue] = useState(str);
  const onChange = e => setValue(e.target.value);
  return { value, onChange };
};
