import React from "react";
var randomColor = require("randomcolor");

const Suggestion = ({ itemObj, updateInput }) => {
  let color = randomColor();
  var divStyle = {
    background: color,
    paddingRight: "6px",
    paddingLeft: "6px",
    width: "auto"
  };

  return (
    <button
      onClick={() => {
        updateInput(itemObj);
      }}
      style={divStyle}
    >
      {itemObj}
    </button>
  );
};
export default Suggestion;
