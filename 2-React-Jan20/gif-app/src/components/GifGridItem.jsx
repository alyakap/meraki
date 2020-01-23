import React from 'react'
const Gif = ({ GifObj }) => <li><img src={GifObj.media[0].tinygif.url} alt="" /></li>
export default Gif;