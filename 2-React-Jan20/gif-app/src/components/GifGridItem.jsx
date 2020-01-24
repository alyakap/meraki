import React from 'react'

const Gif = ({ GifObj,setChosenGif }) => {
    const onClickHandler = function(e){
        //e.preventDefault()
        setChosenGif(GifObj.id);
        //console.log(GifObj.id)
    }
    return <li className="gif" onClick={onClickHandler}><img src={GifObj.media[0].tinygif.url} alt="" /></li>
}
export default Gif;
