import React from "react";
const InputArea = ({ updateSearchStr, disabled }) => {
  return (
    <>
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
    </>
  );
};
export default InputArea;
