import React from "react";
import InputArea from "./InputArea";
import Suggestions from "./Suggestions";
//import SuggestionItem from "./SuggestionItem";
const Form = ({
  updateSearchStr,
  getGifs,
  disabled,
  searchStr,
  updateInput
}) => {
  const clearForm = () => {
    document.getElementById("mainForm").reset();
  };
  return (
    <>
      <form
        id="mainForm"
        className="form-inline"
        onSubmit={e => {
          e.preventDefault();
          getGifs();
          clearForm();
          //this.mainInput.value = "";
        }}
      >
        <InputArea updateSearchStr={updateSearchStr} disabled={disabled} />
      </form>
      {searchStr.length >= 3 ? (
        <Suggestions searchStr={searchStr} updateInput={updateInput} />
      ) : (
        <></>
      )}
    </>
  );
};
export default Form;
