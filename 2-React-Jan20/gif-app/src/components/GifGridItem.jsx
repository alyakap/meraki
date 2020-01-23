import React from 'react'
const Gif = ({ GifObj }) => <img src={GifObj.media[0].tinygif.url} alt="" />
export default Gif;