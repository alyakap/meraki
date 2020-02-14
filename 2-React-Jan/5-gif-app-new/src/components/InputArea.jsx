import React from "react";
const InputArea = ({ updateSearchStr, disabled }) => {
  return (
    <>
      <button type="submit" disabled={disabled} className="">
        <i className="fas fa-search" aria-hidden="true"></i>
      </button>

      <input
        className="form-control form-control-sm ml-3 w-75"
        type="text"
        placeholder="Search for Gifs"
        aria-label="Search"
        onChange={updateSearchStr}
      />
    </>
  );
};
export default InputArea;
