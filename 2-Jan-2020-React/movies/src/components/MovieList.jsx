import React from 'react';
import Loading from './Loading';
import Movie from './Movie'

const MovieList = (props) => {
    if(props.movies.loading){
        return <Loading />;
    }else{
        if(props.movies.data.length){
            return <ul>{props.movies.data.map(movie=><Movie key={movie.imdbID} movieObj={movie} />)}</ul>
        }else{
            return <p>Your search returned no movies</p>;
        }
    }
}
export default MovieList