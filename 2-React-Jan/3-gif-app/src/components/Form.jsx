import React from "react";
import Suggestion from "./Suggestion";

const Form = ({
  getGif,
  gifSearchStr,
  disabled,
  searchSuggestions: { loading, data },
  updateInput,
  clearSuggestions
}) => {
  return (
    <>
      <form
        onSubmit={getGif}
      >
        <input
          type="text"
          value={gifSearchStr}
          onChange={updateInput}
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
