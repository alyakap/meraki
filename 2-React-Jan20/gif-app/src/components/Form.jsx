import React from "react";

const Form = ({ getGif, gifSearchStr, updateSeacrhStrValue, disabled }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        getGif();
      }}
    >
      <input
        type="text"
        value={gifSearchStr}
        onChange={e => {
          updateSeacrhStrValue(e.target.value);
        }}
      />
      <button type="submit" disabled={disabled}>
        Search
      </button>
    </form>
  );
};

export default Form;
