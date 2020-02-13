import React from 'react';
import PropTypes from 'prop-types';
import Gif from './GifGridItem'


const searchString = "test"

console.log(searchString)

const GifGrid = ({pageLoad,gifs:{loading, data}, setChosenGif}) => {
    return loading ? <p>Gifs are loading</p> 
                   : 
                    data.length ? <ul>{data.map(gif=><Gif setChosenGif={setChosenGif} key={gif.id} GifObj={gif} />)}</ul> 
                                : 
                                !pageLoad && <p>Your search returned no gifs</p>
}
GifGrid.propTypes = {
    pageLoad: PropTypes.bool.isRequired,
    gifs :PropTypes.object.isRequired,
    setChosenGif:PropTypes.func.isRequired
}
export default GifGrid