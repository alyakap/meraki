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
    <li><button
      onClick={updateInput}
      style={divStyle}
    >
      {itemObj}
    </button></li>
  );
};
export default Suggestion;
