import React from "react";
import Suggestion from "./Suggestion";

const Form = ({
  getGif,
  gifSearchStr,
  updateSeacrhStrValue,
  disabled,
  searchSuggestions: { loading, data },
  updateInput
}) => {
  return (
    <>
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

      <ul>
        {data.length > 0 &&
          data.map(suggestion => (
            <Suggestion
              updateInput={updateInput}
              key={suggestion}
              itemObj={suggestion}
            />
          ))}
      </ul>
    </>
  );
};

export default Form;
