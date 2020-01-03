const movies = require('../../models/movies')

const getMovies = () => {
    return movies
}
const getMovie = id => {
    const foundMovie = movies.find(movie => {
        return movie.id === id;
    });
    return foundMovie
    //return movies
}

const getFilteredMovies = ids => {
    const idsArr = ids.split(',');
    Array.from(Array(movies.length).keys()).reverse().forEach(index =>
        !idsArr.some(id => id === movies[index].id) && movies.splice(index, 1)
    );
    return movies
}

// or
// const getMovie = id => movies.find(movie => movie.id === id)

module.exports = {
    getMovies,
    getMovie,
    getFilteredMovies
}