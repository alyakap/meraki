import React from "react";
var randomColor = require("randomcolor");
const SuggestionItem = ({ itemObj, updateInput, emptySuggestions }) => {
  let color = randomColor();
  var divStyle = {
    background: color,
    paddingRight: "6px",
    paddingLeft: "6px",
    marginRight: "6px",
    width: "auto"
  };

  const handleSuggestionItemButtonClick = function(e) {
    updateInput(e);
    emptySuggestions();
  };

  return (
    <>
      <button
        className="btn"
        style={divStyle}
        onClick={handleSuggestionItemButtonClick}
      >
        {itemObj}
      </button>
    </>
  );
};
export default SuggestionItem;
