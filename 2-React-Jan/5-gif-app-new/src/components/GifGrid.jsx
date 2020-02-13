import React from "react";
import Gif from "./GifGridItem";
const GifGrid = ({ setChosenGif, pageLoad, gifs: { loading, data } }) => {
  return loading ? (
    <div className="spinner-grow text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : data.length ? (
    <div className="grid">
      <div className="grid-sizer"></div>
      {data.map(gif => (
        <Gif key={gif.id} GifObj={gif} setChosenGif={setChosenGif} />
      ))}
    </div>
  ) : (
    !pageLoad && <p>Your search returned no gifs</p>
  );
};
export default GifGrid;
