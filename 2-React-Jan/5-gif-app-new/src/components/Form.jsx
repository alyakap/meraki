import React from "react";
import InputArea from "./InputArea";
import Suggestions from "./Suggestions";
const Form = ({ updateSearchStr, getGifs, disabled }) => {
  return (
    <>
      <form
        className="form-inline md-form mr-auto mb-4"
        onSubmit={e => {
          e.preventDefault();
          getGifs();
        }}
      >
        <InputArea updateSearchStr={updateSearchStr} disabled={disabled} />
      </form>
      <Suggestions />
    </>
  );
};
export default Form;
