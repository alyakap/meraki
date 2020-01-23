import React from 'react'
const Gif = ({ GifObj }) => <li><a><img src={GifObj.media[0].tinygif.url} alt="" /></a></li>
export default Gif;