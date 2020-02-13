import React from "react";
const Form = ({ updateSearchStr, getGifs, disabled }) => {
  return (
    <form
      className="form-inline md-form mr-auto mb-4"
      onSubmit={e => {
        e.preventDefault();
        getGifs();
      }}
    >
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search for Gifs"
        aria-label="Search"
        onChange={updateSearchStr}
      />
      <button
        className="btn btn-outline-info btn-rounded waves-effect"
        type="submit"
        disabled={disabled}
      >
        Search
      </button>
    </form>
  );
};
export default Form;
