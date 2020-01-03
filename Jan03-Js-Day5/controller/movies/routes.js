const movieRouter = require('express').Router()

const {
    handleGetMovieList,
    handleGetCertainMovie,
    handleGetFilteredMovies
} = require('./handlers')

movieRouter
    .get('/', handleGetMovieList)
    .get('/:id', handleGetCertainMovie)
    .get('/filter/:ids', handleGetFilteredMovies)
//.get('/user/:userid', handleGetTasksByUserId)

module.exports = movieRouter;