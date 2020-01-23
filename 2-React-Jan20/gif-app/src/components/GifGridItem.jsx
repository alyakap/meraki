import React from 'react'
const Gif = ({ GifObj:{gif} }) => <img src={gif.media.tinygif.url} alt="" />
export default Gif;