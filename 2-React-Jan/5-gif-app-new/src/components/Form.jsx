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
  return (
    <>
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault();
          getGifs();
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
