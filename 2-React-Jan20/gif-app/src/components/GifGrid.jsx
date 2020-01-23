import React from 'react';
import Gif from './GifGridItem'

const GifGrid = (props) => {
    if(props.gifs.loading){
        return <p>Gifs are loading</p> 
    } else {
        if(props.gifs.data.length){
            return <ul>{props.gifs.data.map(gif=><Gif key={gif.id} GifObj={gif} />)}</ul>
        } else {
            return <p>Your search returned no gifs</p>;
        }
    }
}
export default GifGrid