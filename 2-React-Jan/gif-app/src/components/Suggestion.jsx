import React from "react";
var randomColor = require("randomcolor");

const Suggestion = ({ itemObj, updateInput }) => {
  // const onClickHandler = function(e){
  //     //e.preventDefault()
  //     //setChosenGif(GifObj.id);
  //     //console.log(GifObj.id)
  // }onClick={onClickHandler}
  let color = randomColor();
  return (
    <button onClick={() => updateInput(itemObj)} style={{ background: color }}>
      {itemObj}
    </button>
  );
};
export default Suggestion;
