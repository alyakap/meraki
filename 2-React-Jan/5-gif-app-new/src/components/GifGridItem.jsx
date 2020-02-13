import React from "react";
const Gif = ({ GifObj, setChosenGif }) => {
  const onClickHandler = function(e) {
    setChosenGif(GifObj.id);
  };
  return (
    <div className="grid-item" onClick={onClickHandler}>
      <img src={GifObj.media[0].tinygif.url} alt="" />
    </div>
  );
};
export default Gif;
