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
    // !!! DO NOT MUTATE THE ORIGINAL ARRAY
    const filteredMovies = [...movies]
    const idsArr = ids.split(',');
    Array.from(Array(filteredMovies.length).keys()).reverse().forEach(index =>
        !idsArr.some(id => id === filteredMovies[index].id) && filteredMovies.splice(index, 1)
    );
    return filteredMovies
}

// or
// const getMovie = id => movies.find(movie => movie.id === id)

module.exports = {
    getMovies,
    getMovie,
    getFilteredMovies
}