import React from 'react';
import Gif from './GifGridItem'

const GifGrid = ({pageLoad,gifs:{loading, data}}) => {
    return loading ? <p>Gifs are loading</p> 
                   : 
                    data.length ? <ul>{data.map(gif=><Gif key={gif.id} GifObj={gif} />)}</ul> 
                                : 
                                !pageLoad && <p>Your search returned no gifs</p>
}
export default GifGrid